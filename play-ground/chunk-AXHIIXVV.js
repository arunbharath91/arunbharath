import{a as b}from"./chunk-BHP4JTLZ.js";import{a as f}from"./chunk-GUJLOWQ7.js";import{b as h}from"./chunk-VHDJ24KY.js";import{g as y}from"./chunk-CJK7SFDF.js";import"./chunk-3XBYOJNL.js";import"./chunk-2T7PP3I7.js";import"./chunk-H2UPXF7Z.js";import"./chunk-IQR54AYO.js";import{Db as m,Eb as d,Jb as r,Kb as e,Lb as t,Mb as s,Xb as u,cb as o,jc as a,rb as c,xc as g}from"./chunk-HTLIC7AN.js";import"./chunk-EU2KAMEK.js";import"./chunk-DAQOROHW.js";var v={basic:"<ui-audio-player />",customTracks:`<!-- Define your custom tracks -->
const customTracks: Track[] = [
  {
    id: '1',
    title: 'My Song',
    artist: 'My Artist',
    src: 'https://example.com/audio/song1.mp3',
    cover: 'https://example.com/images/cover1.jpg',
  },
  {
    id: '2',
    title: 'Another Song',
    artist: 'Another Artist',
    src: 'https://example.com/audio/song2.mp3',
    cover: 'https://example.com/images/cover2.jpg',
  },
];

<!-- Pass tracks as input -->
<ui-audio-player [tracks]="customTracks" />`,typescript:`import { Track } from '@arun-bharath-ui/cmp-ui';

export interface Track {
  id: string;        // Unique identifier
  title: string;     // Track title
  artist: string;    // Artist name
  src: string;       // Audio file URL (mp3, wav, etc.)
  cover: string;     // Album cover image URL
}`};var x=()=>["UI","Media","Interactive"];function k(i,w){if(i&1&&s(0,"playground-api-table",4),i&2){let l=u();r("properties",l.apiProps)}}var _=(()=>{class i{constructor(){this.snippets=v,this.apiProps=[{name:"tracks",type:"Track[]",default:"Default playlist (10 tracks)",description:"Array of audio tracks to play. Each track should have id, title, artist, src, and cover properties."}],this.customTracks=[{id:"1",title:"Custom Track 1",artist:"Custom Artist",src:"https://www.bensound.com/bensound-music/bensound-ukulele.mp3",cover:"https://www.bensound.com/bensound-img/ukulele.jpg"},{id:"2",title:"Custom Track 2",artist:"Custom Artist",src:"https://www.bensound.com/bensound-music/bensound-summer.mp3",cover:"https://www.bensound.com/bensound-img/summer.jpg"}]}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=c({type:i,selectors:[["playground-audio-player-demo"]],decls:24,vars:8,consts:[["title","Audio Player","description","Full-featured audio player with playlist support",3,"tags","apiReference","examples"],["demo",""],[1,"player-container"],["api",""],[3,"properties"],[1,"api-section","mt-4"],[1,"api-title"],[1,"feature-list-simple"],["examples",""],["title","Basic Usage","description","The standard audio player with default built-in playlist.","language","HTML",3,"code"],["title","Custom Tracks","description","Provide your own playlist by passing a tracks array.","language","HTML",3,"code"],["title","Track Interface","description","TypeScript interface for defining audio tracks.","language","TypeScript",3,"code"]],template:function(n,p){n&1&&(e(0,"playground-demo-page-template",0)(1,"div",1)(2,"div",2),s(3,"ui-audio-player"),t()(),e(4,"div",3),m(5,k,1,1,"playground-api-table",4),e(6,"div",5)(7,"h4",6),a(8,"Key Features"),t(),e(9,"ul",7)(10,"li"),a(11,"Play/Pause controls with smooth state transitions"),t(),e(12,"li"),a(13,"Next/Previous track navigation via playlist logic"),t(),e(14,"li"),a(15,"Interactive progress bar with scrubbing support"),t(),e(16,"li"),a(17,"Built-in playlist with 10 high-quality tracks"),t(),e(18,"li"),a(19,"Dynamic album cover and metadata display"),t()()()(),e(20,"div",8),s(21,"playground-example-viewer",9)(22,"playground-example-viewer",10)(23,"playground-example-viewer",11),t()()),n&2&&(r("tags",g(7,x))("apiReference",!0)("examples",!0),o(5),d(p.apiProps.length>0?5:-1),o(16),r("code",p.snippets.basic),o(),r("code",p.snippets.customTracks),o(),r("code",p.snippets.typescript))},dependencies:[h,b,f,y],styles:[".player-container[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}  .api-table{width:100%;border-collapse:collapse;margin:16px 0}  .api-table th,   .api-table td{text-align:left;padding:12px;border-bottom:1px solid rgba(0,0,0,.12)}  .api-table th{font-weight:500;background:var(--cmp-gray-100)}  .api-table code{background:#0000000d;padding:2px 6px;border-radius:3px}pre[_ngcontent-%COMP%]{background:#0d1117;padding:16px;border-radius:4px;overflow-x:auto}h3[_ngcontent-%COMP%]{margin:16px 0;font-weight:500}ul[_ngcontent-%COMP%]{line-height:1.8}"]})}}return i})();export{_ as AudioPlayerDemoComponent};
