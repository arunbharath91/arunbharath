import{a as k}from"./chunk-Y4H4NODF.js";import{U as E}from"./chunk-MCMYPSFL.js";import"./chunk-GIHUYPOD.js";import"./chunk-RPEJZLQH.js";import"./chunk-CTPTPGWO.js";import{$a as l,Cb as u,Db as g,Ib as _,Jb as i,Kb as t,Rb as C,Tb as f,Vb as s,hc as e,ka as c,la as d,lc as S,oc as h,pb as w,pc as x,qc as v,rc as I,vc as b,wa as p}from"./chunk-U75DPAS6.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var D=()=>["Bootstrap","E-commerce","Interactive"];function L(r,y){if(r&1){let a=C();i(0,"ui-cart-list",8),I("dataChange",function(n){c(a);let m=s();return v(m.cartItem1,n)||(m.cartItem1=n),d(n)}),f("removeCart",function(){c(a);let n=s();return d(n.handleRemove("item1"))}),t()}if(r&2){let a=s();x("data",a.cartItem1)}}function T(r,y){if(r&1){let a=C();i(0,"ui-cart-list",8),I("dataChange",function(n){c(a);let m=s();return v(m.cartItem2,n)||(m.cartItem2=n),d(n)}),f("removeCart",function(){c(a);let n=s();return d(n.handleRemove("item2"))}),t()}if(r&2){let a=s();x("data",a.cartItem2)}}function M(r,y){if(r&1){let a=C();i(0,"ui-cart-list",8),I("dataChange",function(n){c(a);let m=s();return v(m.cartItem3,n)||(m.cartItem3=n),d(n)}),f("removeCart",function(){c(a);let n=s();return d(n.handleRemove("item3"))}),t()}if(r&2){let a=s();x("data",a.cartItem3)}}var N=(()=>{class r{constructor(){this.cartItem1=p({pid:"1",cid:"electronics",stockavailable:"10",images:[{src:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"}],title:"Wireless Headphones",stockavailability:"In Stock",currentprice:"99.99",oldprice:"129.99",offer:"23%",deliveryby:"March 20, 2024",qty:1,freeshipping:"Yes"}),this.cartItem2=p({pid:"2",cid:"electronics",stockavailable:"5",images:[{src:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"}],title:"Smart Watch",stockavailability:"In Stock",currentprice:"249.99",oldprice:"299.99",offer:"17%",deliveryby:"March 18, 2024",qty:2,freeshipping:"Yes"}),this.cartItem3=p({pid:"3",cid:"accessories",stockavailable:"15",images:[{src:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop"}],title:"Laptop Stand",stockavailability:"In Stock",currentprice:"49.99",oldprice:"69.99",offer:"29%",deliveryby:"March 22, 2024",qty:1}),this.showItem1=p(!0),this.showItem2=p(!0),this.showItem3=p(!0)}handleRemove(a){a==="item1"&&this.showItem1.set(!1),a==="item2"&&this.showItem2.set(!1),a==="item3"&&this.showItem3.set(!1)}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=w({type:r,selectors:[["playground-cart-list-demo"]],decls:118,vars:75,consts:[["title","Cart List","description","Shopping cart item component with quantity controls and remove functionality",3,"tags","apiReference","examples"],["demo",""],[1,"cart-demo"],[3,"data"],["api",""],[1,"api-table"],[1,"feature-list"],["examples",""],[3,"dataChange","removeCart","data"]],template:function(o,n){o&1&&(i(0,"playground-demo-page-template",0)(1,"div",1)(2,"div",2),u(3,L,1,1,"ui-cart-list",3),u(4,T,1,1,"ui-cart-list",3),u(5,M,1,1,"ui-cart-list",3),t()(),i(6,"div",4)(7,"h3"),e(8,"Component Overview"),t(),i(9,"p"),e(10," The Cart List component displays shopping cart items with quantity controls and remove functionality. Perfect for e-commerce checkout flows and shopping cart pages. "),t(),i(11,"h3"),e(12,"Selector"),t(),i(13,"pre")(14,"code"),e(15,"<ui-cart-list></ui-cart-list>"),t()(),i(16,"h3"),e(17,"Inputs/Outputs"),t(),i(18,"table",5)(19,"thead")(20,"tr")(21,"th"),e(22,"Property"),t(),i(23,"th"),e(24,"Type"),t(),i(25,"th"),e(26,"Description"),t()()(),i(27,"tbody")(28,"tr")(29,"td")(30,"code"),e(31,"data"),t()(),i(32,"td")(33,"code"),e(34,"ModelSignal<ICart>"),t()(),i(35,"td"),e(36,"Cart item data with two-way binding (required)"),t()(),i(37,"tr")(38,"td")(39,"code"),e(40,"removeCart"),t()(),i(41,"td")(42,"code"),e(43,"OutputEmitterRef<ICart>"),t()(),i(44,"td"),e(45,"Emitted when user clicks remove button"),t()()()(),i(46,"h3"),e(47,"ICart Interface"),t(),i(48,"pre")(49,"code"),e(50),t()(),i(51,"h3"),e(52,"Key Features"),t(),i(53,"ul",6)(54,"li")(55,"strong"),e(56,"Quantity Controls:"),t(),e(57," Increment/decrement with + and - buttons "),t(),i(58,"li")(59,"strong"),e(60,"Remove Item:"),t(),e(61," Delete button to remove from cart"),t(),i(62,"li")(63,"strong"),e(64,"Two-Way Binding:"),t(),e(65," Uses model signals for reactive updates "),t(),i(66,"li")(67,"strong"),e(68,"Product Display:"),t(),e(69," Shows image, title, price, offer, and delivery info "),t(),i(70,"li")(71,"strong"),e(72,"Stock Info:"),t(),e(73," Displays availability and stock status "),t(),i(74,"li")(75,"strong"),e(76,"Performance:"),t(),e(77," OnPush change detection"),t()(),i(78,"h3"),e(79,"Use Cases"),t(),i(80,"ul")(81,"li"),e(82,"Shopping cart pages"),t(),i(83,"li"),e(84,"Checkout flows"),t(),i(85,"li"),e(86,"Order review screens"),t(),i(87,"li"),e(88,"Wishlist management"),t()()(),i(89,"div",7)(90,"h3"),e(91,"1. Basic Cart Item"),t(),i(92,"p"),e(93,"Display a single cart item with quantity controls."),t(),i(94,"pre")(95,"code"),e(96),t()(),i(97,"h3"),e(98,"2. Multiple Cart Items"),t(),i(99,"p"),e(100," Display multiple cart items with individual signals for two-way binding. "),t(),i(101,"pre")(102,"code"),e(103),t()(),i(104,"h3"),e(105,"3. Cart with Total Calculation"),t(),i(106,"p"),e(107,"Calculate and display cart total based on quantities."),t(),i(108,"pre")(109,"code"),e(110),t()(),i(111,"h3"),e(112,"4. Empty Cart State"),t(),i(113,"p"),e(114,"Handle empty cart with conditional display."),t(),i(115,"pre")(116,"code"),e(117),t()()()()),o&2&&(_("tags",b(74,D))("apiReference",!0)("examples",!0),l(3),g(n.showItem1()?3:-1),l(),g(n.showItem2()?4:-1),l(),g(n.showItem3()?5:-1),l(45),S("interface ICart ","{",`
  pid: string;              // Product ID
  cid: string;              // Category ID
  stockavailable: string;   // Available stock quantity
  images: Image[];          // Product images
  title: string;            // Product title
  stockavailability: string; // Stock status text
  currentprice: string;     // Current price
  oldprice: string;         // Original price
  offer: string;            // Discount offer text
  deliveryby: string;       // Expected delivery date
  qty: number;              // Quantity in cart
  freeshipping?: string;    // Free shipping indicator
`,"}",`

interface Image `,"{",`
  src: string;              // Image URL
`,"}"),l(46),h(["import ","{"," CartListComponent ","}",` from '@arun-bharath-ui/cmp-bootstrap';

// Define the ICart interface locally
interface ICart `,"{",`
  pid: string;
  cid: string;
  stockavailable: string;
  images: `,"{"," src: string ","}",`[];
  title: string;
  stockavailability: string;
  currentprice: string;      // Numeric string without $ symbol
  oldprice: string;          // Numeric string without $ symbol
  offer: string;             // e.g., "23%"
  deliveryby: string;
  qty: number;
  freeshipping?: string;
`,"}",`

@Component(`,"{",`
  standalone: true,
  imports: [CartListComponent],
  template: \\\`
    <ui-cart-list
      [(data)]="cartItem"
      (removeCart)="handleRemove()"
    />
  \\\`
`,"}",`)
export class CartPageComponent `,"{",`
  cartItem = signal<ICart>(`,"{",`
    pid: '1',
    cid: 'electronics',
    stockavailable: '10',
    images: [`,"{"," src: 'assets/product.jpg' ","}",`],
    title: 'Wireless Headphones',
    stockavailability: 'In Stock',
    currentprice: '99.99',    // No $ symbol
    oldprice: '129.99',
    offer: '23%',
    deliveryby: 'March 20, 2024',
    qty: 1,
    freeshipping: 'Yes'
  `,"}",`);

  handleRemove() `,"{",`
    console.log('Item removed');
  `,"}",`
`,"}"]),l(7),h(["export class ShoppingCartComponent ","{",`
  // Each item needs its own signal for two-way binding
  item1 = signal<ICart>(`,"{",`
    pid: '1',
    cid: 'electronics',
    stockavailable: '10',
    images: [`,"{"," src: 'assets/headphones.jpg' ","}",`],
    title: 'Wireless Headphones',
    stockavailability: 'In Stock',
    currentprice: '99.99',
    oldprice: '129.99',
    offer: '23%',
    deliveryby: 'March 20, 2024',
    qty: 1,
    freeshipping: 'Yes'
  `,"}",`);

  item2 = signal<ICart>(`,"{",`
    pid: '2',
    cid: 'electronics',
    stockavailable: '5',
    images: [`,"{"," src: 'assets/watch.jpg' ","}",`],
    title: 'Smart Watch',
    stockavailability: 'In Stock',
    currentprice: '249.99',
    oldprice: '299.99',
    offer: '17%',
    deliveryby: 'March 18, 2024',
    qty: 2
  `,"}",`);

  showItem1 = signal(true);
  showItem2 = signal(true);

  handleRemove(itemId: string) `,"{",`
    if (itemId === '1') this.showItem1.set(false);
    if (itemId === '2') this.showItem2.set(false);
  `,"}",`
`,"}",`

<div class="cart-container">
  @if (showItem1()) `,"{",`
    <ui-cart-list [(data)]="item1" (removeCart)="handleRemove('1')" />
  `,"}",`
  @if (showItem2()) `,"{",`
    <ui-cart-list [(data)]="item2" (removeCart)="handleRemove('2')" />
  `,"}",`
</div>`]),l(7),h(["export class CheckoutComponent ","{",`
  item1 = signal<ICart>(/* cart item 1 */);
  item2 = signal<ICart>(/* cart item 2 */);

  showItem1 = signal(true);
  showItem2 = signal(true);

  getTotal(): number `,"{",`
    let total = 0;
    if (this.showItem1()) `,"{",`
      const item = this.item1();
      total += parseFloat(item.currentprice) * item.qty;
    `,"}",`
    if (this.showItem2()) `,"{",`
      const item = this.item2();
      total += parseFloat(item.currentprice) * item.qty;
    `,"}",`
    return total;
  `,"}",`

  handleRemove(itemId: string) `,"{",`
    if (itemId === '1') this.showItem1.set(false);
    if (itemId === '2') this.showItem2.set(false);
  `,"}",`
`,"}",`

<div class="cart">
  @if (showItem1()) `,"{",`
    <ui-cart-list [(data)]="item1" (removeCart)="handleRemove('1')" />
  `,"}",`
  @if (showItem2()) `,"{",`
    <ui-cart-list [(data)]="item2" (removeCart)="handleRemove('2')" />
  `,"}",`

  <div class="cart-summary">
    <h3>Total: $`,"{","","{"," getTotal().toFixed(2) ","}","","}",`</h3>
  </div>
</div>`]),l(7),h(["export class CartComponent ","{",`
  item1 = signal<ICart>(/* cart item */);
  showItem1 = signal(true);

  hasItems(): boolean `,"{",`
    return this.showItem1();
  `,"}",`

  handleRemove() `,"{",`
    this.showItem1.set(false);
  `,"}",`

  goToShop() `,"{",`
    // Navigate to shop
  `,"}",`
`,"}",`

@if (hasItems()) `,"{",`
  @if (showItem1()) `,"{",`
    <ui-cart-list [(data)]="item1" (removeCart)="handleRemove()" />
  `,"}",`
`,"}"," @else ","{",`
  <div class="empty-cart">
    <p>Your cart is empty</p>
    <button (click)="goToShop()">Continue Shopping</button>
  </div>
`,"}"]))},dependencies:[k,E],styles:[".cart-demo[_ngcontent-%COMP%]{max-width:800px;margin:0 auto}.cart-demo[_ngcontent-%COMP%]   ui-cart-list[_ngcontent-%COMP%]{display:block;margin-bottom:16px}"]})}}return r})();export{N as CartListDemoComponent};
