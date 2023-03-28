import React from 'react'

const Carousel = () => {
  return (
    <div className="container-fluid">
          <div className="row">
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner carousel-inside" role="listbox">
                  <div className="item active">
                    <img src="https://media.istockphoto.com/id/1334114165/photo/tasty-vegetable-pizza.jpg?s=612x612&w=0&k=20&c=5zOgPhiTKbWV_aHGZM-DD87nvJxqG__huNi8Lhd0GeE=" alt="pizza" width="100%"/>
                  </div>
                  <div className="item">
                    <img src="https://media.istockphoto.com/id/1343561122/photo/close-up-of-a-young-group-of-friends-passing-and-serving-food-while-enjoying-together-they.jpg?s=612x612&w=0&k=20&c=NC76E7U2bj3lm7smI_rAxQ02sxn0bLxLWVL-fAtVtRI=" alt="pizza" width="100%"/>
                  </div>
                  <div className="item">
                    <img src="https://media.istockphoto.com/id/1347464546/photo/bride-and-groom-on-a-wedding-day.jpg?s=612x612&w=0&k=20&c=xkC7kn3ZMmn9p083zjR-09M7NixnNtfCRFjGZktqhWQ=" alt="pizza" width="100%"/>
                  </div>
                  ...
                </div>

                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
          </div>
        </div>
  )
}

export default Carousel

