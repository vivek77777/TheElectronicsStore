import React, { Component } from 'react'
import Catalog from './Catalog';
import Banner from './Banner';
import Cart from './Cart';
import Checkout from './Checkout';

class Home extends Component {
    constructor(){
        super();

        var items=[
            {
                id:1,
                name:"Headphones Captain America editon",
                price:799,
                limg:"http://assets.myntassets.com/assets/images/7265401/2018/11/21/690bd042-0ef0-483d-9c25-2916a54a7dd01542782697284-Kook-N-Keech-Unisex-Headphones-8361542782697047-1.jpg",
                desc:"Headphones are designed in contrast to loudspeakers that produce sound that can be heard by anyone in the area"
            },
            {
                id:2,
                name:"Airpods",
                price:1999,
                limg:"https://i0.wp.com/www.mac-ave.com/wp-content/uploads/2017/02/Airpods_PF_Float-SCREEN.png?fit=1024%2C1024&ssl=1",
                desc:"AirPods deliver an unparalleled wireless headphone experience. ... And the AirPods experience is just as amazing"
            },
            {
                id:3,
                name:"Powerbank",
                price:699,
                limg:"https://img.staticbg.com/thumb/large/oaupload/banggood/images/A7/D1/db1e813c-9eb0-4ff7-adc1-0feaca8a513e.jpg",
                desc:"Powerbanks can be charged up using a USB charger when power is available, and then used to charge battery powered items like mobile phones and a host of other devices that would normally use a USB charger."
            },
            {
                id:4,
                name:"Mobile Case Vikings Edtion",
                price:399,
                limg:"https://ae01.alicdn.com/kf/HTB1PY0okr1YBuNjSszeq6yblFXaF/MaiYaCa-Vikings-Ragnar-Bjorn-Floki-quotes-Printed-Mobile-Phone-Cases-For-iPhone-6S-7-8-Plus.jpg_640x640.jpg",
                desc:"Protect your smartphone with our range of Mobile Phone cases and covers."
            },
            {
                id:5,
                name:"HardDrive 1 TB",
                price:3599,
                limg:"https://m.media-amazon.com/images/S/aplus-media/vc/043eb99a-cd7d-4416-b0ad-f0c065aeeae8._SL300__.jpg",
                desc:"The most versatile and dependable high-capacity hard disk drives (HDD) and solid state drives (SSD) available."
            },
            {
                id:6,
                name:"PenDrive 32 GB",
                price:859,
                limg:"https://www.shubz.in/wp-content/uploads/2017/11/Top-10-Best-Budget-16-GB-Pendrives.png",
                desc:"Quickly and easily transfer your files between OTG-enabled Android™ smartphones and tablets and PC and Mac computers. "
            }
        ];

        this.state={
            items:items,
            cartItems:[],
            orderTotal:0
        }
    }

    addToCart=(item)=>{
        console.log(item);

        item.qty=1;

        var isItemExists=this.state.cartItems.some((cartItem)=>{
            return item.id==cartItem.id
        })

        if(isItemExists){
            item.qty++;

            this.setState({
                cartItems:[
                    ...this.state.cartItems.filter((cartItem)=>{
                        return item.id!=cartItem.id;
                    }),
                    item
                ]
            },()=>{
                this.setState({
                    orderTotal:this.state.cartItems.reduce((total,cartItem)=>{
                        return total + cartItem.price * cartItem.qty;
                    },0)
                })
            })
        }
        else {
            this.setState({
                cartItems:[
                    ...this.state.cartItems,
                    item
                ]
            },()=>{
                this.setState({
                    orderTotal:this.state.cartItems.reduce((total,cartItem)=>{
                        return total + cartItem.price * cartItem.qty;
                    },0)
                })
            })
        }
        
    }

    removeFromCart=(item)=>{
        console.log(item)
        this.setState({
            cartItems:this.state.cartItems.filter((cartItem)=>{
                return cartItem.id!=item.id
            })
        },()=>{
            this.setState({
                orderTotal:this.state.cartItems.reduce((total,cartItem)=>{
                    return total + cartItem.price;
                },0)
            })
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <Banner/>
                        <Catalog items={this.state.items} addToCart={this.addToCart}/>
                    </div>

                    <div className="col-lg-3">
                        <Cart items={this.state.cartItems} removeFromCart={this.removeFromCart}/>
                        <Checkout orderTotal={this.state.orderTotal} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;