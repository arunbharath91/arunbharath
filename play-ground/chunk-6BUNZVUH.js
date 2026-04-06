import{F as b}from"./chunk-SBIJFZDA.js";import"./chunk-24GYA6MA.js";import"./chunk-5FBFIPUF.js";import{a as C}from"./chunk-HAYVGET7.js";import"./chunk-W3V7OEYG.js";import"./chunk-35IBFZQM.js";import"./chunk-5JN3VS6X.js";import"./chunk-CGVOUCLE.js";import"./chunk-XJA634MG.js";import"./chunk-PRGDJABY.js";import"./chunk-XNXG5RW6.js";import"./chunk-6F733C44.js";import{Bc as y,Pb as E,Qb as n,Rb as e,Zb as c,cb as a,oc as t,rc as x,sb as h,tc as f,uc as u,vc as p,wc as v,xa as l,xc as g,yc as S}from"./chunk-6QGPMABE.js";import"./chunk-RPEJZLQH.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var w=()=>["Bootstrap","Social","Interactive"],R=(()=>{class r{constructor(){this.comment1=l({certified:"Verified Buyer",name:"John Doe",option:{likes:12,dislikes:0},location:"New York, USA",description:"Great component library! Very easy to use and well-documented. The Bootstrap integration is seamless and the components are highly customizable.",title:"Excellent Quality",rating:"5"}),this.comment2=l({certified:"Certified Developer",name:"Jane Smith",option:{likes:8,dislikes:1},location:"California, USA",description:"The Material Design integration is seamless. Highly recommended for Angular projects!",title:"Great Integration",rating:"4.5"}),this.comment3=l({certified:"Premium Member",name:"Bob Johnson",option:{likes:15,dislikes:0},location:"London, UK",description:"Love the TypeScript support and type safety throughout. Makes development much easier.",title:"Excellent TypeScript Support",rating:"5"}),this.comments=l([this.comment1,this.comment2,this.comment3])}handleSocialEvent(s){console.log(`User ${s.type}d the review:`,s.data)}static{this.\u0275fac=function(d){return new(d||r)}}static{this.\u0275cmp=h({type:r,selectors:[["app-comment-list-demo"]],decls:198,vars:79,consts:[["title","Comment List","description","Review/comment component with like/dislike functionality and user information",3,"tags","apiReference","examples"],["demo",""],[1,"comment-demo"],[3,"dataChange","socialEvent","data"],["api",""],[1,"api-table"],[1,"feature-list"],["examples",""]],template:function(d,o){d&1&&(n(0,"app-demo-page-template",0)(1,"div",1)(2,"div",2)(3,"bt-comment-list",3),S("dataChange",function(i){return g(o.comment1,i)||(o.comment1=i),i}),c("socialEvent",function(i){return o.handleSocialEvent(i)}),e(),n(4,"bt-comment-list",3),S("dataChange",function(i){return g(o.comment2,i)||(o.comment2=i),i}),c("socialEvent",function(i){return o.handleSocialEvent(i)}),e(),n(5,"bt-comment-list",3),S("dataChange",function(i){return g(o.comment3,i)||(o.comment3=i),i}),c("socialEvent",function(i){return o.handleSocialEvent(i)}),e()()(),n(6,"div",4)(7,"h3"),t(8,"Component Overview"),e(),n(9,"p"),t(10," The Comment List component displays user reviews and comments with interactive like/dislike functionality. Perfect for product reviews, blog comments, testimonials, and user feedback sections. "),e(),n(11,"h3"),t(12,"Selector"),e(),n(13,"pre")(14,"code"),t(15,"<bt-comment-list></bt-comment-list>"),e()(),n(16,"h3"),t(17,"Inputs"),e(),n(18,"table",5)(19,"thead")(20,"tr")(21,"th"),t(22,"Property"),e(),n(23,"th"),t(24,"Type"),e(),n(25,"th"),t(26,"Default"),e(),n(27,"th"),t(28,"Description"),e()()(),n(29,"tbody")(30,"tr")(31,"td")(32,"code"),t(33,"data"),e()(),n(34,"td")(35,"code"),t(36,"ModelSignal<ICommentListData>"),e()(),n(37,"td"),t(38,"-"),e(),n(39,"td"),t(40,"Comment data with two-way binding (required)"),e()(),n(41,"tr")(42,"td")(43,"code"),t(44,"params"),e()(),n(45,"td")(46,"code"),t(47,"InputSignal<IKeyValue>"),e()(),n(48,"td")(49,"code"),t(50,"undefined"),e()(),n(51,"td"),t(52,"URL parameters for routing"),e()(),n(53,"tr")(54,"td")(55,"code"),t(56,"urlPath"),e()(),n(57,"td")(58,"code"),t(59,"InputSignal<string>"),e()(),n(60,"td")(61,"code"),t(62,"undefined"),e()(),n(63,"td"),t(64,"Route path for navigation"),e()(),n(65,"tr")(66,"td")(67,"code"),t(68,"target"),e()(),n(69,"td")(70,"code"),t(71,"InputSignal<string>"),e()(),n(72,"td")(73,"code"),t(74,"'_self'"),e()(),n(75,"td"),t(76,"Link target (_self, _blank, etc.)"),e()()()(),n(77,"h3"),t(78,"Outputs"),e(),n(79,"table",5)(80,"thead")(81,"tr")(82,"th"),t(83,"Event"),e(),n(84,"th"),t(85,"Type"),e(),n(86,"th"),t(87,"Description"),e()()(),n(88,"tbody")(89,"tr")(90,"td")(91,"code"),t(92,"socialEvent"),e()(),n(93,"td")(94,"code"),t(95),e()(),n(96,"td"),t(97,"Emitted when user likes or dislikes a comment"),e()()()(),n(98,"h3"),t(99,"Data Interfaces"),e(),n(100,"pre")(101,"code"),t(102),e()(),n(103,"h3"),t(104,"Key Features"),e(),n(105,"ul",6)(106,"li")(107,"strong"),t(108,"Like/Dislike System:"),e(),t(109," Interactive voting with real-time counter updates "),e(),n(110,"li")(111,"strong"),t(112,"Smart Voting:"),e(),t(113," Prevents duplicate votes - switching from like to dislike adjusts both counters "),e(),n(114,"li")(115,"strong"),t(116,"Certification Badge:"),e(),t(117," Displays verified buyer or user status "),e(),n(118,"li")(119,"strong"),t(120,"User Information:"),e(),t(121," Shows name, location, and rating "),e(),n(122,"li")(123,"strong"),t(124,"Review Content:"),e(),t(125," Supports title and detailed description "),e(),n(126,"li")(127,"strong"),t(128,"Bootstrap Popover:"),e(),t(129," Built-in ng-bootstrap popover integration "),e(),n(130,"li")(131,"strong"),t(132,"Two-Way Binding:"),e(),t(133," Reactive updates with model signals "),e(),n(134,"li")(135,"strong"),t(136,"Performance:"),e(),t(137," OnPush change detection"),e()(),n(138,"h3"),t(139,"Voting Behavior"),e(),n(140,"ul")(141,"li"),t(142,"User can like OR dislike, not both simultaneously"),e(),n(143,"li"),t(144," Switching from like to dislike: decrements likes, increments dislikes "),e(),n(145,"li"),t(146," Switching from dislike to like: decrements dislikes, increments likes "),e(),n(147,"li"),t(148,"Clicking the same action twice has no effect (prevents spam)"),e()(),n(149,"h3"),t(150,"Use Cases"),e(),n(151,"ul")(152,"li"),t(153,"Product reviews and ratings"),e(),n(154,"li"),t(155,"Blog post comments"),e(),n(156,"li"),t(157,"Customer testimonials"),e(),n(158,"li"),t(159,"Forum discussions"),e(),n(160,"li"),t(161,"User feedback sections"),e()()(),n(162,"div",7)(163,"h3"),t(164,"1. Basic Comment/Review"),e(),n(165,"p"),t(166,"Display a single comment with like/dislike functionality."),e(),n(167,"pre")(168,"code"),t(169),e()(),n(170,"h3"),t(171,"2. Multiple Comments List"),e(),n(172,"p"),t(173," Display a list of comments with individual signals for two-way binding. "),e(),n(174,"pre")(175,"code"),t(176),e()(),n(177,"h3"),t(178,"3. With Navigation"),e(),n(179,"p"),t(180,"Link comments to user profiles or detail pages."),e(),n(181,"pre")(182,"code"),t(183),e()(),n(184,"h3"),t(185,"4. With Backend Integration"),e(),n(186,"p"),t(187,"Save votes to backend and handle errors."),e(),n(188,"pre")(189,"code"),t(190),e()(),n(191,"h3"),t(192,"5. Empty State"),e(),n(193,"p"),t(194,"Handle no comments scenario."),e(),n(195,"pre")(196,"code"),t(197),e()()()()),d&2&&(E("tags",y(78,w))("apiReference",!0)("examples",!0),a(3),v("data",o.comment1),a(),v("data",o.comment2),a(),v("data",o.comment3),a(90),x("OutputEmitterRef<","{","type, data","}",">"),a(7),f("interface ICommentListData ","{",`
  certified: string;        // Certification badge (e.g., "Verified Buyer")
  name: string;            // Reviewer/commenter name
  option: `,"{",`
    likes?: number;        // Number of likes received
    dislikes?: number;     // Number of dislikes received
  `,"}",`;
  location: string;        // Reviewer location
  description: string;     // Comment/review text content
  title: string;          // Comment/review title
  rating: string;         // Star rating (e.g., "4.5", "5")
`,"}",`

// Social event payload
interface SocialEvent `,"{",`
  type: 'like' | 'dislike';
  data: ICommentListData;
`,"}"),a(67),p(["import ","{"," CommentListComponent ","}",` from '@arun-bharath-ui/cmp-bootstrap';

// Define interface locally (not exported from library)
interface ICommentListData `,"{",`
  certified: string;
  name: string;
  option: `,"{"," likes?: number; dislikes?: number ","}",`;
  location: string;
  description: string;
  title: string;
  rating: string;
`,"}",`

@Component(`,"{",`
  standalone: true,
  imports: [CommentListComponent],
  template: \\\`
    <bt-comment-list
      [(data)]="comment"
      (socialEvent)="handleSocialEvent($event)"
    />
  \\\`
`,"}",`)
export class ReviewsComponent `,"{",`
  comment = signal<ICommentListData>(`,"{",`
    certified: 'Verified Buyer',
    name: 'John Doe',
    option: `,"{"," likes: 12, dislikes: 0 ","}",`,
    location: 'New York, USA',
    description: 'Great component library! Very easy to use and well-documented.',
    title: 'Excellent Quality',
    rating: '5'
  `,"}",`);

  handleSocialEvent(event: `,"{"," type: string; data: ICommentListData ","}",") ","{","\n    console.log(\\`User $","{","event.type","}",`d the review\\\`, event.data);
    // Save to backend
    this.reviewService.updateVote(event.data.name, event.type);
  `,"}",`
`,"}"]),a(7),p(["export class ProductReviewsComponent ","{",`
  // Each comment needs its own signal for two-way binding
  comment1 = signal<ICommentListData>(`,"{",`
    certified: 'Verified Buyer',
    name: 'Jane Smith',
    option: `,"{"," likes: 8, dislikes: 1 ","}",`,
    location: 'California, USA',
    description: 'The Material Design integration is seamless.',
    title: 'Great Integration',
    rating: '4.5'
  `,"}",`);

  comment2 = signal<ICommentListData>(`,"{",`
    certified: 'Certified Developer',
    name: 'Bob Johnson',
    option: `,"{"," likes: 15, dislikes: 0 ","}",`,
    location: 'London, UK',
    description: 'TypeScript support and type safety throughout.',
    title: 'Excellent TypeScript Support',
    rating: '5'
  `,"}",`);

  handleSocialEvent(event: any) `,"{",`
    console.log('Social event:', event);
  `,"}",`
`,"}",`

<div class="reviews-list">
  <bt-comment-list
    [(data)]="comment1"
    (socialEvent)="handleSocialEvent($event)"
  />
  <bt-comment-list
    [(data)]="comment2"
    (socialEvent)="handleSocialEvent($event)"
  />
</div>`]),a(7),u("export class CommentsComponent ","{",`
  comment = signal<ICommentListData>(/* comment data */);

  handleSocialEvent(event: any) `,"{",`
    // Track analytics
    this.analytics.track('comment_voted', `,"{",`
      type: event.type,
      commentId: event.data.name
    `,"}",`);
  `,"}",`
`,"}",`

<bt-comment-list
  [(data)]="comment"
  [params]="`,"{"," userId: '123' ","}",`"
  [urlPath]="'/user/profile'"
  [target]="'_blank'"
  (socialEvent)="handleSocialEvent($event)"
/>`),a(7),p(["export class ReviewSystemComponent ","{",`
  comment = signal<ICommentListData>(/* comment data */);
  saving = signal(false);

  handleSocialEvent(event: `,"{"," type: string; data: ICommentListData ","}",") ","{",`
    this.saving.set(true);

    this.reviewService.vote(`,"{",`
      reviewId: event.data.name,
      voteType: event.type
    `,"}",").subscribe(","{",`
      next: (response) => `,"{",`
        console.log('Vote saved successfully');
        this.saving.set(false);
      `,"}",`,
      error: (err) => `,"{",`
        console.error('Failed to save vote:', err);
        // Revert the vote in UI
        this.comment.set(event.data);
        this.saving.set(false);
      `,"}",`
    `,"}",`);
  `,"}",`
`,"}",`

<bt-comment-list
  [(data)]="comment"
  (socialEvent)="handleSocialEvent($event)"
/>
@if (saving()) `,"{",`
  <p>Saving...</p>
`,"}"]),a(7),u("export class ReviewsPageComponent ","{",`
  comments = signal<ICommentListData[]>([]);

  hasComments(): boolean `,"{",`
    return this.comments().length > 0;
  `,"}",`
`,"}",`

@if (hasComments()) `,"{",`
  <div class="comments-section">
    <h2>Customer Reviews</h2>
    <!-- Render comments -->
  </div>
`,"}"," @else ","{",`
  <div class="no-reviews">
    <p>No reviews yet. Be the first to review!</p>
    <button (click)="openReviewForm()">Write a Review</button>
  </div>
`,"}"))},dependencies:[C,b],styles:[".comment-demo[_ngcontent-%COMP%]{max-width:900px;margin:0 auto}.comment-demo[_ngcontent-%COMP%]   bt-comment-list[_ngcontent-%COMP%]{display:block;margin-bottom:24px}"]})}}return r})();export{R as CommentListDemoComponent};
