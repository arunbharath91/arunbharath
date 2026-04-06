import{E as k}from"./chunk-SBIJFZDA.js";import"./chunk-24GYA6MA.js";import"./chunk-5FBFIPUF.js";import{a as E}from"./chunk-HAYVGET7.js";import"./chunk-W3V7OEYG.js";import"./chunk-35IBFZQM.js";import"./chunk-5JN3VS6X.js";import"./chunk-CGVOUCLE.js";import"./chunk-XJA634MG.js";import"./chunk-PRGDJABY.js";import"./chunk-XNXG5RW6.js";import"./chunk-6F733C44.js";import{$b as s,Bc as S,Jb as g,Kb as C,Pb as _,Qb as n,Rb as t,Xb as u,Zb as f,cb as l,la as c,ma as d,oc as e,sb as w,sc as b,vc as h,wc as x,xa as p,xc as v,yc as I}from"./chunk-6QGPMABE.js";import"./chunk-RPEJZLQH.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var D=()=>["Bootstrap","E-commerce","Interactive"];function L(r,y){if(r&1){let a=u();n(0,"bt-cart-list",8),I("dataChange",function(i){c(a);let m=s();return v(m.cartItem1,i)||(m.cartItem1=i),d(i)}),f("removeCart",function(){c(a);let i=s();return d(i.handleRemove("item1"))}),t()}if(r&2){let a=s();x("data",a.cartItem1)}}function T(r,y){if(r&1){let a=u();n(0,"bt-cart-list",8),I("dataChange",function(i){c(a);let m=s();return v(m.cartItem2,i)||(m.cartItem2=i),d(i)}),f("removeCart",function(){c(a);let i=s();return d(i.handleRemove("item2"))}),t()}if(r&2){let a=s();x("data",a.cartItem2)}}function M(r,y){if(r&1){let a=u();n(0,"bt-cart-list",8),I("dataChange",function(i){c(a);let m=s();return v(m.cartItem3,i)||(m.cartItem3=i),d(i)}),f("removeCart",function(){c(a);let i=s();return d(i.handleRemove("item3"))}),t()}if(r&2){let a=s();x("data",a.cartItem3)}}var N=(()=>{class r{constructor(){this.cartItem1=p({pid:"1",cid:"electronics",stockavailable:"10",images:[{src:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"}],title:"Wireless Headphones",stockavailability:"In Stock",currentprice:"99.99",oldprice:"129.99",offer:"23%",deliveryby:"March 20, 2024",qty:1,freeshipping:"Yes"}),this.cartItem2=p({pid:"2",cid:"electronics",stockavailable:"5",images:[{src:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"}],title:"Smart Watch",stockavailability:"In Stock",currentprice:"249.99",oldprice:"299.99",offer:"17%",deliveryby:"March 18, 2024",qty:2,freeshipping:"Yes"}),this.cartItem3=p({pid:"3",cid:"accessories",stockavailable:"15",images:[{src:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop"}],title:"Laptop Stand",stockavailability:"In Stock",currentprice:"49.99",oldprice:"69.99",offer:"29%",deliveryby:"March 22, 2024",qty:1}),this.showItem1=p(!0),this.showItem2=p(!0),this.showItem3=p(!0)}handleRemove(a){a==="item1"&&this.showItem1.set(!1),a==="item2"&&this.showItem2.set(!1),a==="item3"&&this.showItem3.set(!1)}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=w({type:r,selectors:[["app-cart-list-demo"]],decls:118,vars:75,consts:[["title","Cart List","description","Shopping cart item component with quantity controls and remove functionality",3,"tags","apiReference","examples"],["demo",""],[1,"cart-demo"],[3,"data"],["api",""],[1,"api-table"],[1,"feature-list"],["examples",""],[3,"dataChange","removeCart","data"]],template:function(o,i){o&1&&(n(0,"app-demo-page-template",0)(1,"div",1)(2,"div",2),g(3,L,1,1,"bt-cart-list",3),g(4,T,1,1,"bt-cart-list",3),g(5,M,1,1,"bt-cart-list",3),t()(),n(6,"div",4)(7,"h3"),e(8,"Component Overview"),t(),n(9,"p"),e(10," The Cart List component displays shopping cart items with quantity controls and remove functionality. Perfect for e-commerce checkout flows and shopping cart pages. "),t(),n(11,"h3"),e(12,"Selector"),t(),n(13,"pre")(14,"code"),e(15,"<bt-cart-list></bt-cart-list>"),t()(),n(16,"h3"),e(17,"Inputs/Outputs"),t(),n(18,"table",5)(19,"thead")(20,"tr")(21,"th"),e(22,"Property"),t(),n(23,"th"),e(24,"Type"),t(),n(25,"th"),e(26,"Description"),t()()(),n(27,"tbody")(28,"tr")(29,"td")(30,"code"),e(31,"data"),t()(),n(32,"td")(33,"code"),e(34,"ModelSignal<ICart>"),t()(),n(35,"td"),e(36,"Cart item data with two-way binding (required)"),t()(),n(37,"tr")(38,"td")(39,"code"),e(40,"removeCart"),t()(),n(41,"td")(42,"code"),e(43,"OutputEmitterRef<ICart>"),t()(),n(44,"td"),e(45,"Emitted when user clicks remove button"),t()()()(),n(46,"h3"),e(47,"ICart Interface"),t(),n(48,"pre")(49,"code"),e(50),t()(),n(51,"h3"),e(52,"Key Features"),t(),n(53,"ul",6)(54,"li")(55,"strong"),e(56,"Quantity Controls:"),t(),e(57," Increment/decrement with + and - buttons "),t(),n(58,"li")(59,"strong"),e(60,"Remove Item:"),t(),e(61," Delete button to remove from cart"),t(),n(62,"li")(63,"strong"),e(64,"Two-Way Binding:"),t(),e(65," Uses model signals for reactive updates "),t(),n(66,"li")(67,"strong"),e(68,"Product Display:"),t(),e(69," Shows image, title, price, offer, and delivery info "),t(),n(70,"li")(71,"strong"),e(72,"Stock Info:"),t(),e(73," Displays availability and stock status "),t(),n(74,"li")(75,"strong"),e(76,"Performance:"),t(),e(77," OnPush change detection"),t()(),n(78,"h3"),e(79,"Use Cases"),t(),n(80,"ul")(81,"li"),e(82,"Shopping cart pages"),t(),n(83,"li"),e(84,"Checkout flows"),t(),n(85,"li"),e(86,"Order review screens"),t(),n(87,"li"),e(88,"Wishlist management"),t()()(),n(89,"div",7)(90,"h3"),e(91,"1. Basic Cart Item"),t(),n(92,"p"),e(93,"Display a single cart item with quantity controls."),t(),n(94,"pre")(95,"code"),e(96),t()(),n(97,"h3"),e(98,"2. Multiple Cart Items"),t(),n(99,"p"),e(100," Display multiple cart items with individual signals for two-way binding. "),t(),n(101,"pre")(102,"code"),e(103),t()(),n(104,"h3"),e(105,"3. Cart with Total Calculation"),t(),n(106,"p"),e(107,"Calculate and display cart total based on quantities."),t(),n(108,"pre")(109,"code"),e(110),t()(),n(111,"h3"),e(112,"4. Empty Cart State"),t(),n(113,"p"),e(114,"Handle empty cart with conditional display."),t(),n(115,"pre")(116,"code"),e(117),t()()()()),o&2&&(_("tags",S(74,D))("apiReference",!0)("examples",!0),l(3),C(i.showItem1()?3:-1),l(),C(i.showItem2()?4:-1),l(),C(i.showItem3()?5:-1),l(45),b("interface ICart ","{",`
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
    <bt-cart-list
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
    <bt-cart-list [(data)]="item1" (removeCart)="handleRemove('1')" />
  `,"}",`
  @if (showItem2()) `,"{",`
    <bt-cart-list [(data)]="item2" (removeCart)="handleRemove('2')" />
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
    <bt-cart-list [(data)]="item1" (removeCart)="handleRemove('1')" />
  `,"}",`
  @if (showItem2()) `,"{",`
    <bt-cart-list [(data)]="item2" (removeCart)="handleRemove('2')" />
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
    <bt-cart-list [(data)]="item1" (removeCart)="handleRemove()" />
  `,"}",`
`,"}"," @else ","{",`
  <div class="empty-cart">
    <p>Your cart is empty</p>
    <button (click)="goToShop()">Continue Shopping</button>
  </div>
`,"}"]))},dependencies:[E,k],styles:[".cart-demo[_ngcontent-%COMP%]{max-width:800px;margin:0 auto}.cart-demo[_ngcontent-%COMP%]   bt-cart-list[_ngcontent-%COMP%]{display:block;margin-bottom:16px}"]})}}return r})();export{N as CartListDemoComponent};
