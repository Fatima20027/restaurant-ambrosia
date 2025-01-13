import React from 'react';
import menu from '../../assets/menu.png';
import "./Menu.css";

const Menu = () => {
  return (
    <div className="container">
      <div className=" row">
        <div className="col-md-6">
          <img src={menu} alt="menu-img" className="menu-img w-100" />
        </div>
        <div className=" col-md-6 menu-content ">
          {/* Menu Section */}
          <div className="menu-section mb-4">
            <h2 className='menu-title'><span style={{ fontFamily: "italic", fontWeight: "400"}}>M</span>ENU</h2>
            <div>
            <h2>FOOD</h2>
            <p className="section-description">
              These dishes are lingering over.
            </p>

            <div className="menu-item d-flex justify-content-between ">
              <div>
                <strong>ONION SOUP</strong>
                <p className="dish-description">
                  A classic, rich onion soup with melted Gruyere cheese
                </p>
              </div>
              <span className="price">$12.00</span>
            </div>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>STEAK TARTARE</strong>
                <p className="dish-description">
                  Finely chopped raw steak with capers, onions, and a quail egg yolk
                </p>
              </div>
              <span className="price">$18.00</span>
            </div>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>PAN-SEARED SCALLOPS</strong>
                <p className="dish-description">
                  Scallops served with a delicate lemon beurre blanc sauce
                </p>
              </div>
              <span className="price">$22.00</span>
            </div>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>BEEF WELLINGTON</strong>
                <p className="dish-description">
                  A tender filet mignon encased in puff pastry with mushroom duxelles
                </p>
              </div>
              <span className="price">$30.00</span>
            </div>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>SALMON ROULADE</strong>
                <p className="dish-description">
                  Rolled salmon filet with a creamy dill sauce and asparagus
                </p>
              </div>
              <span className="price">$26.00</span>
            </div>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>DUCK CONFIT</strong>
                <p className="dish-description">
                  Slow-cooked duck leg served with a cherry reduction
                </p>
              </div>
              <span className="price">$28.00</span>
            </div>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>TRUFFLE RISOTTO</strong>
                <p className="dish-description">
                  Creamy risotto with black truffle and Parmesan
                </p>
              </div>
              <span className="price">$24.00</span>
            </div>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>CHEESE PLATE</strong>
                <p className="dish-description">
                  An assortment of fine cheeses with figs and a toasted baguette
                </p>
              </div>
              <span className="price">$16.00</span>
            </div>
          </div>

          {/* Dessert Section */}
          <div className="menu-section mb-4">
            <h2>DESSERT</h2>
            <p className="section-description">
              Our desserts are made in-house by our expert pastry chef
            </p>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>CRÈME BRÛLÉE</strong>
                <p className='dish-description'>A freshly baked brownie loaded with dark chocolate chips and walnuts</p>
              </div>
              <span className="price">$10.00</span>
            </div>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>TIRAMISU</strong>
                <p className='dish-description'>A traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone</p>
              </div>
              <span className="price">$12.00</span>
            </div>
          </div>

          {/* Cocktails Section */}
          <div className="menu-section mb-4">
            <h2>COCKTAILS</h2>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>MARTINI</strong>
                <p>Gin or vodka, dry vermouth, choice of garnish</p>
              </div>
              <span className="price">$14.00</span>
            </div>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>MANHATTAN</strong>
                <p>Bourbon or rye, sweet vermouth, bitters, cherry garnish</p>
              </div>
              <span className="price">$15.00</span>
            </div>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>NEGRONI</strong>
                <p>Gin, Campari, sweet vermouth, orange twist</p>
              </div>
              <span className="price">$14.00</span>
            </div>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>WHISKEY SOUR</strong>
                <p>Bourbon, lemon juice, simple syrup, cherry, and orange slice</p>
              </div>
              <span className="price">$13.00</span>
            </div>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>GIMLET</strong>
                <p>Gin or vodka, lime juice, simple syrup</p>
              </div>
              <span className="price">$13.00</span>
            </div>
          </div>

          {/* Wines Section */}
          <div className="menu-section mb-4">
            <h2>WINES</h2>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>CHARDONNAY</strong>
                <p>Private Winery</p>
              </div>
              <span className="price">$12.00</span>
            </div>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>SAUVIGNON BLANC</strong>
                <p>Private Winery</p>
                <div>
                  
                </div>
              </div>
              <span className="price">$14.00</span>
            </div>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>PINOT NOIR</strong>
                <p>Private Winery</p>
                <div>
                  
                </div>
              </div>
              <span className="price">$11.00</span>
            </div>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>CABERNET SAUVIGNON</strong>
                <p>Private Winery</p>
              </div>
              <span className="price">$14.00</span>
            </div>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>MERLOT</strong>
                <p>Private Winery</p>
                
              </div>
              <span className="price">$13.00</span>
            </div>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>SYRAH / SHIRAZ</strong>
                <p>Private Winery</p>
                
              </div>
              <span className="price">$12.00</span>
            </div>

            <div className="menu-item d-flex justify-content-between">
              <div>
                <strong>CHAMPAGNE</strong>
                <p>Private Winery</p>
                
              </div>
              <span className="price">$18.00</span>
            </div>
          </div>
            </div>

            

        </div>
      </div>
    </div>
  );
};

export default Menu;