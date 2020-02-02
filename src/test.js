import React, { Component } from 'react';
import Tattoo from "./Tattoo"

export default class test extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tattoos: [
              
            {
                id: 1,
                img: "https://rockerhontas.com/apptattoos/woman.jpg",
                title: "Woman",
                style: "Linework" 
        },
        {
            id: 2,
            img: "https://rockerhontas.com/apptattoos/feather.jpg",
            title: "Feder",
            style: "Realistik" 
        },
        {
            id: 3,
            img: "https://rockerhontas.com/apptattoos/skull.jpg",
            title: "Totenkopf",
            style: "Realistik" 
        },
        {
            id: 4,
            img: "https://rockerhontas.com/apptattoos/hp2.jpg",
            title: "Heiligtümer des Todes",
            style: "Watercolor" 
        },
        {
            id: 5,
            img: "https://rockerhontas.com/apptattoos/cactus.jpg",
            title: "Kaktus",
            style: "Sketchstyle" 
        },
        {
            id: 6,
            img: "https://rockerhontas.com/apptattoos/planets.jpg",
            title: "PLaneten",
            style: "Linework" 
        },
        {
            id: 7,
            img: "https://rockerhontas.com/apptattoos/mandala.jpg",
            title: "Mandala",
            style: "Mandala" 
        },
        {
            id: 8,
            img: "https://rockerhontas.com/apptattoos/lettering.jpg",
            title: "Letterings",
            style: "Letterings" 
        },
        {
            id: 9,
            img: "https://rockerhontas.com/apptattoos/leaf.jpg",
            title: "Leaf",
            style: "Watercolor" 
        },
        {
            id: 10,
            img: "https://rockerhontas.com/apptattoos/hp.jpg",
            title: "Harry Potter",
            style: "Linework" 
        },
        {
            id: 11,
            img: "https://rockerhontas.com/apptattoos/fuchs.jpg",
            title: "Fuchs",
            style: "Comic" 
        },
        {
            id: 12,
            img: "https://rockerhontas.com/apptattoos/flower.jpg",
            title: "Neo Traditional Peony",
            style: "Traditional" 
        },
        {
            id: 13,
            img: "https://rockerhontas.com/apptattoos/steuerrad.jpg",
            title: "Steuerrad",
            style: "Watercolor" 
        },
        {
            id: 14,
            img: "https://rockerhontas.com/apptattoos/eule.jpg",
            title: "Eule",
            style: "Linework" 
        },
        {
            id: 15,
            img: "https://rockerhontas.com/apptattoos/buddha.jpg",
            title: "Buddha",
            style: "Realistik" 
        }
        
          
        ],

          filterTattoos: [],
        }
      }

    
      componentDidMount(){
        this.setState({
          filterTattoos: this.state.tattoos
        })
      }
    
      handleClick = event => {
        const byStyle = event.target.value
        let filterTattoos = []
        if(event.target.value === 'all'){
          filterTattoos = this.state.tattoos
        } else{
          filterTattoos = this.state.tattoos.filter(tattoos => tattoos.style === byStyle)
        }
        this.setState({filterTattoos: filterTattoos})
      }
    
      render() {
const renderAll = 
this.state.filterTattoos.map 
(tattoo => <Tattoo key={tattoo.name} info={tattoo} />)

        return (
        
          <div>
<section className="buttonform">
        <button className="filterbutton" value='all' onClick={this.handleClick}>Alle</button>
        <button className="filterbutton" value='Realistik' onClick={this.handleClick}>Realistik
        </button>
        <button className="filterbutton" value='Linework' onClick={this.handleClick}>Linework</button>
        <button className="filterbutton" value='Mandala' onClick={this.handleClick}>Mandala</button>
        <button className="filterbutton" value='Watercolor' onClick={this.handleClick}>Watercolor</button>
</section>
        <section className="column">

        <section className="tattoos">
            {renderAll}
            </section>
            </section>
          </div>

     
        );
      }
    }




   