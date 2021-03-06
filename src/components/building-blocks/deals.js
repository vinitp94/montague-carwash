import React      from 'react';
import ClassNames from 'classnames';

export default function Deals() {
  return (
    <div className="mv-deals">
      <div className={ ClassNames({ "header": true, "standard": true }) }>Standard Services</div>

      <div className="standard-container">
        <div className="standard-unit">
          <div className="name">Exterior Hand Wash</div>
          <div className="feature">Hand wash</div>
          <div className="feature">Hand dry</div>
          <div className="feature">Window cleaning</div>
          <div className="feature">Tire dressing</div>
          <div className="price">Price: $19.95</div>
        </div>

        <div className="standard-unit">
          <div className="name">Premier Hand Wash</div>
          <div className="feature">Hand wash</div>
          <div className="feature">Hand dry</div>
          <div className="feature">Inside & outside glass cleaning</div>
          <div className="feature">Interior vacuum</div>
          <div className="price">Price: $29.95</div>
        </div>

        <div className="standard-unit">
          <div className="name">VIP Hand Wash</div>
          <div className="feature">Hand wash</div>
          <div className="feature">Hand dry</div>
          <div className="feature">Inside & outside glass cleaning</div>
          <div className="feature">Interior vacuum & dusting</div>
          <div className="feature">Dashboard, door panels, & trunk cleaning</div>
          <div className="feature">Wheel brightening</div>
          <div className="feature">Tire dressing</div>
          <div className="feature">Fragrance</div>
          <div className="feature">Water spot & tree sap removal (extra charges)</div>
          <div className="price">Price: $34.95</div>
        </div>

        <div className="standard-unit">
          <div className="name">Ultimate VIP Hand Wash</div>
          <div className="feature">** Includes all VIP Hand Wash features</div>
          <div className="feature">Front floor mat wash and clean</div>
          <div className="feature">Dashboard & door creme</div>
          <div className="price">Price: $44.95</div>
        </div>

        <div className="standard-unit">
          <div className="name">Exterior Hand Wash & Hand Wax</div>
          <div className="feature">** Includes all Exterior Hand Wash features</div>
          <div className="feature">Wax (applied by hand)</div>
          <div className="feature">Carnuba wax (add $10)</div>
          <div className="price">Price: $49.95</div>
        </div>

        <div className="standard-unit">
          <div className="name">Premier Hand Wax</div>
          <div className="feature">** Includes all VIP Hand Wash features</div>
          <div className="feature">Wax (applied by hand)</div>
          <div className="feature">Carnuba wax (add $10)</div>
          <div className="price">Price: $59.95</div>
        </div>
      </div>

      <div className="header">Mini Detail</div>

      <div className="mini-detail-container">
        <div className="mini-detail-unit">
          <div className="name">Premier Clay Bar & Hand Wax</div>
          <div className="feature">** Includes all VIP Hand Wash features</div>
          <div className="feature">Carnuba wax (applied by hand)</div>
          <div className="feature">Clay bar paint surface (applied by hand)</div>
          <div className="price">Price: $99.95</div>
        </div>

        <div className="mini-detail-unit">
          <div className="name">Mini Detail Special</div>
          <div className="feature">** Includes all VIP Hand Wash features</div>
          <div className="feature">Dashboard, door, & console creme</div>
          <div className="feature">Carnuba wax (applied by hand)</div>
          <div className="feature">Seat OR carpet shampoo (excluding leather)</div>
          <div className="price">Price: $119.95</div>
        </div>

        <div className="mini-detail-unit">
          <div className="name">Headlight Restoration</div>
          <div className="feature">Headlight buff & polish</div>
          <div className="feature">Transparency restoration</div>
          <div className="price">Price: (starting from) $39.95</div>
        </div>

        <div className="mini-detail-unit">
          <div className="name">Carpet Shampoo</div>
          <div className="feature">Lift solids & remove most spots/stains</div>
          <div className="feature">Carpets & mats cleaning</div>
          <div className="feature">Fragrance</div>
          <div className="price">Price: $59.95</div>
        </div>

        <div className="mini-detail-unit">
          <div className="name">Seat shampoo (non-leather)</div>
          <div className="feature">Lift solids & remove most spots/stains</div>
          <div className="feature">Fragrance</div>
          <div className="price">Price: $59.95</div>
        </div>

        <div className="mini-detail-unit">
          <div className="name">Leather Seat Clean & Condition</div>
          <div className="feature">Seat cleaning with special solvent</div>
          <div className="feature">Interior trim cleaning</div>
          <div className="feature">Fragrance</div>
          <div className="price">Price: $69.95</div>
        </div>
      </div>

      <div className="header">Full Detail</div>

      <div className="full-detail-container">
        <div className="full-detail-unit">
          <div className="name">Interior Detail</div>
          <div className="feature">Interior vacuum & dusting</div>
          <div className="feature">Dashboard, door panels, & trunk cleaning</div>
          <div className="feature">Dashboard & door creme</div>
          <div className="feature">Cleaning of air vents, door pockets, & cup holders</div>
          <div className="feature">Electrical component dusting</div>
          <div className="feature">Carpet & seat shampoo</div>
          <div className="feature">Floor mat cleaning</div>
          <div className="feature">Fragrance</div>
          <div className="price">Price: $149.95</div>
        </div>

        <div className="full-detail-unit">
          <div className="name">Exterior Detail</div>
          <div className="feature">Hand wash</div>
          <div className="feature">Hand dry</div>
          <div className="feature">Window cleaning</div>
          <div className="feature">Wheel brightening</div>
          <div className="feature">Tire dressing</div>
          <div className="feature">Water spot & tree sap removal</div>
          <div className="feature">Carnuba wax (applied by hand)</div>
          <div className="feature">Clay bar paint surface (applied by hand)</div>
          <div className="price">Price: $119.95</div>
        </div>

        <div className="full-detail-unit">
          <div className="name">Interior & Exterior Combination</div>
          <div className="feature">** Includes all Interior Detail features</div>
          <div className="feature">** Includes all Exterior Detail features</div>
          <div className="price">Price: $229.95</div>
        </div>
      </div>
    </div>
  );
}
