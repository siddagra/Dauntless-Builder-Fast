var greenLight=!1,filtSetCells=[],filtSet=[];const iweapon=[[{id:2,cell:[2,4],perk:{j:1,k:3}},{id:3,cell:[3,4],perk:{j:2,k:0}},{id:6,cell:[1,3],perk:{j:1,k:6}},{id:8,cell:[2,3],perk:{j:4,k:9}},{id:18,cell:[5,1],perk:{j:5,k:2}},{id:23,cell:[3,1],perk:{j:1,k:3}},{id:9,cell:[4,5],perk:{j:3,k:4}},{id:1,cell:[2,4],perk:{j:5,k:1}},{id:20,cell:[3,2],perk:{j:3,k:2}},{id:24,cell:[3,5],perk:{j:3,k:2}},{id:12,cell:[2,2],perk:{j:2,k:6}},{id:13,cell:[3,1],perk:{j:2,k:2}},{id:16,cell:[3,5],perk:{j:3,k:12}},{id:17,cell:[3,4],perk:{j:2,k:5}},{id:19,cell:[3,4],perk:{j:3,k:0}},{id:11,cell:[3,5],perk:{j:2,k:9}},{id:22,cell:[3,3],perk:{j:3,k:8}},{id:25,cell:[3,4],perk:{j:2,k:5}},{id:14,cell:[2,5],perk:{j:2,k:11}},{id:21,cell:[3,5],perk:{j:1,k:2}},{id:27,cell:[3,1],perk:{j:5,k:1}},{id:29,cell:[2,3],perk:{j:5,k:2}},{id:7,cell:[1,3],perk:{j:2,k:2}},{id:5,cell:[3,2],perk:{j:5,k:1}},{id:33,cell:[2,5],perk:{j:2,k:0}},{id:26,cell:[3,1],perk:{j:1,k:11}}],[{id:29,cell:[2,3],perk:{j:5,k:2}},{id:18,cell:[5,1],perk:{j:5,k:2}},{id:3,cell:[2,4],perk:{j:2,k:0}},{id:20,cell:[1,2],perk:{j:3,k:2}},{id:6,cell:[2,1],perk:{j:1,k:6}},{id:8,cell:[3,2],perk:{j:4,k:9}},{id:9,cell:[5,4],perk:{j:3,k:4}},{id:1,cell:[2,4],perk:{j:5,k:1}},{id:12,cell:[2,2],perk:{j:2,k:6}},{id:13,cell:[2,3],perk:{j:2,k:3}},{id:16,cell:[2,5],perk:{j:3,k:12}},{id:17,cell:[2,4],perk:{j:2,k:5}},{id:19,cell:[2,4],perk:{j:3,k:0}},{id:11,cell:[2,5],perk:{j:2,k:9}},{id:24,cell:[2,5],perk:{j:3,k:2}},{id:22,cell:[3,3],perk:{j:3,k:8}},{id:25,cell:[2,4],perk:{j:2,k:5}},{id:23,cell:[2,1],perk:{j:1,k:3}},{id:14,cell:[2,5],perk:{j:2,k:11}},{id:21,cell:[3,5],perk:{j:1,k:2}},{id:27,cell:[2,1],perk:{j:5,k:7}},{id:5,cell:[2,4],perk:{j:5,k:1}},{id:2,cell:[2,4],perk:{j:1,k:3}},{id:33,cell:[2,5],perk:{j:2,k:0}},{id:26,cell:[2,1],perk:{j:1,k:11}}],[{id:3,cell:[3,4],perk:{j:2,k:0}},{id:29,cell:[2,3],perk:{j:5,k:2}},{id:2,cell:[2,4],perk:{j:1,k:3}},{id:6,cell:[3,1],perk:{j:1,k:6}},{id:24,cell:[3,5],perk:{j:3,k:2}},{id:20,cell:[3,2],perk:{j:3,k:2}},{id:8,cell:[3,2],perk:{j:4,k:9}},{id:23,cell:[3,1],perk:{j:1,k:3}},{id:9,cell:[5,4],perk:{j:3,k:4}},{id:1,cell:[2,4],perk:{j:5,k:1}},{id:12,cell:[2,2],perk:{j:2,k:6}},{id:13,cell:[3,1],perk:{j:2,k:2}},{id:16,cell:[3,5],perk:{j:3,k:1}},{id:17,cell:[3,4],perk:{j:2,k:14}},{id:19,cell:[3,4],perk:{j:3,k:0}},{id:11,cell:[3,5],perk:{j:2,k:9}},{id:22,cell:[3,3],perk:{j:3,k:8}},{id:25,cell:[3,4],perk:{j:2,k:14}},{id:14,cell:[2,5],perk:{j:2,k:11}},{id:21,cell:[3,5],perk:{j:1,k:2}},{id:27,cell:[3,1],perk:{j:5,k:7}},{id:18,cell:[5,1],perk:{j:5,k:2}},{id:5,cell:[3,2],perk:{j:5,k:1}},{id:33,cell:[2,5],perk:{j:2,k:0}},{id:26,cell:[3,1],perk:{j:1,k:11}}],[{id:20,cell:[2,1],perk:{j:3,k:2}},{id:2,cell:[2,4],perk:{j:1,k:3}},{id:3,cell:[2,4],perk:{j:2,k:0}},{id:6,cell:[2,1],perk:{j:1,k:6}},{id:24,cell:[2,5],perk:{j:3,k:2}},{id:23,cell:[2,1],perk:{j:1,k:3}},{id:8,cell:[3,2],perk:{j:4,k:9}},{id:9,cell:[5,4],perk:{j:3,k:4}},{id:1,cell:[2,4],perk:{j:5,k:1}},{id:12,cell:[2,2],perk:{j:2,k:6}},{id:13,cell:[2,3],perk:{j:2,k:3}},{id:37,cell:[-1,2],perk:{j:2,k:1}},{id:16,cell:[2,5],perk:{j:3,k:12}},{id:17,cell:[2,4],perk:{j:2,k:5}},{id:19,cell:[2,4],perk:{j:3,k:0}},{id:18,cell:[5,1],perk:{j:5,k:2}},{id:11,cell:[2,5],perk:{j:2,k:9}},{id:22,cell:[3,3],perk:{j:3,k:8}},{id:25,cell:[2,4],perk:{j:2,k:5}},{id:29,cell:[2,3],perk:{j:5,k:2}},{id:14,cell:[2,5],perk:{j:2,k:11}},{id:21,cell:[3,5],perk:{j:1,k:2}},{id:27,cell:[2,1],perk:{j:5,k:1}},{id:5,cell:[2,4],perk:{j:5,k:1}},{id:33,cell:[2,5],perk:{j:2,k:0}},{id:26,cell:[2,1],perk:{j:1,k:11}}],[{id:3,cell:[2,4],perk:{j:2,k:0}},{id:20,cell:[3,5],perk:{j:3,k:2}},{id:6,cell:[3,1],perk:{j:1,k:6}},{id:18,cell:[5,1],perk:{j:5,k:2}},{id:23,cell:[3,1],perk:{j:1,k:3}},{id:8,cell:[3,2],perk:{j:4,k:9}},{id:9,cell:[5,4],perk:{j:3,k:4}},{id:24,cell:[2,5],perk:{j:3,k:2}},{id:1,cell:[2,4],perk:{j:5,k:1}},{id:12,cell:[2,2],perk:{j:2,k:6}},{id:13,cell:[3,1],perk:{j:2,k:2}},{id:16,cell:[3,5],perk:{j:3,k:12}},{id:17,cell:[3,1],perk:{j:2,k:14}},{id:19,cell:[2,4],perk:{j:3,k:0}},{id:11,cell:[3,5],perk:{j:2,k:9}},{id:22,cell:[3,3],perk:{j:3,k:8}},{id:25,cell:[2,4],perk:{j:2,k:14}},{id:14,cell:[2,5],perk:{j:2,k:11}},{id:21,cell:[3,5],perk:{j:1,k:2}},{id:27,cell:[2,1],perk:{j:5,k:1}},{id:34,cell:[-1,3],perk:{j:1,k:6}},{id:29,cell:[2,3],perk:{j:5,k:2}},{id:5,cell:[3,4],perk:{j:5,k:1}},{id:33,cell:[2,5],perk:{j:2,k:0}},{id:2,cell:[2,4],perk:{j:1,k:3}},{id:26,cell:[3,1],perk:{j:1,k:11}}],[{id:20,cell:[3,5],perk:{j:3,k:2}},{id:3,cell:[2,4],perk:{j:2,k:0}},{id:23,cell:[1,1],perk:{j:1,k:3}},{id:6,cell:[3,1],perk:{j:1,k:6}},{id:8,cell:[3,2],perk:{j:4,k:9}},{id:9,cell:[5,4],perk:{j:3,k:4}},{id:1,cell:[2,4],perk:{j:5,k:1}},{id:12,cell:[2,2],perk:{j:2,k:6}},{id:13,cell:[3,1],perk:{j:2,k:2}},{id:16,cell:[5,1],perk:{j:3,k:1}},{id:2,cell:[2,4],perk:{j:1,k:3}},{id:17,cell:[2,4],perk:{j:2,k:5}},{id:19,cell:[3,4],perk:{j:3,k:0}},{id:11,cell:[5,4],perk:{j:2,k:9}},{id:22,cell:[3,3],perk:{j:3,k:8}},{id:18,cell:[5,1],perk:{j:5,k:2}},{id:7,cell:[4,2],perk:{j:4,k:6}},{id:25,cell:[2,4],perk:{j:2,k:5}},{id:14,cell:[2,5],perk:{j:2,k:11}},{id:21,cell:[3,5],perk:{j:1,k:2}},{id:27,cell:[3,1],perk:{j:5,k:7}},{id:29,cell:[2,3],perk:{j:5,k:2}},{id:35,cell:[2,-1],perk:{j:2,k:9}},{id:5,cell:[2,5],perk:{j:5,k:1}},{id:33,cell:[2,5],perk:{j:2,k:0}},{id:24,cell:[2,5],perk:{j:3,k:2}},{id:26,cell:[3,1],perk:{j:1,k:11}}],[{id:3,cell:[3,4],perk:{j:2,k:0}},{id:6,cell:[3,1],perk:{j:1,k:6}},{id:18,cell:[5,1],perk:{j:5,k:2}},{id:8,cell:[3,2],perk:{j:4,k:9}},{id:9,cell:[5,4],perk:{j:3,k:4}},{id:1,cell:[2,4],perk:{j:5,k:1}},{id:24,cell:[3,5],perk:{j:3,k:2}},{id:12,cell:[2,2],perk:{j:2,k:6}},{id:29,cell:[2,3],perk:{j:5,k:2}},{id:13,cell:[3,1],perk:{j:2,k:2}},{id:16,cell:[3,5],perk:{j:3,k:1}},{id:17,cell:[3,4],perk:{j:2,k:14}},{id:19,cell:[3,4],perk:{j:3,k:0}},{id:11,cell:[3,5],perk:{j:2,k:9}},{id:2,cell:[2,4],perk:{j:1,k:3}},{id:22,cell:[3,3],perk:{j:3,k:8}},{id:23,cell:[3,1],perk:{j:1,k:3}},{id:25,cell:[3,4],perk:{j:2,k:14}},{id:14,cell:[2,5],perk:{j:2,k:11}},{id:20,cell:[3,2],perk:{j:3,k:2}},{id:21,cell:[3,5],perk:{j:1,k:2}},{id:27,cell:[3,1],perk:{j:5,k:7}},{id:36,cell:[2,-1],perk:{j:3,k:12}},{id:5,cell:[3,2],perk:{j:5,k:1}},{id:33,cell:[2,5],perk:{j:2,k:0}},{id:26,cell:[3,1],perk:{j:1,k:11}}],[{id:12777,cell:[-1,2],perk:{j:0,k:0}},{id:12777,cell:[-1,3],perk:{j:0,k:0}},{id:12777,cell:[1,1],perk:{j:0,k:0}},{id:12777,cell:[1,2],perk:{j:0,k:0}},{id:12777,cell:[1,3],perk:{j:0,k:0}},{id:12777,cell:[2,2],perk:{j:0,k:0}},{id:12777,cell:[2,3],perk:{j:0,k:0}},{id:12777,cell:[2,4],perk:{j:0,k:0}},{id:12777,cell:[2,5],perk:{j:0,k:0}},{id:12777,cell:[3,3],perk:{j:0,k:0}},{id:12777,cell:[3,4],perk:{j:0,k:0}},{id:12777,cell:[3,5],perk:{j:0,k:0}},{id:12777,cell:[4,5],perk:{j:0,k:0}},{id:12777,cell:[5,1],perk:{j:0,k:0}}]],iarmor=[[{id:32,cell:5,perk:{j:5,k:3}},{id:0,cell:4,perk:{j:4,k:9}},{id:22,cell:5,perk:{j:3,k:13}},{id:2,cell:5,perk:{j:1,k:3}},{id:17,cell:2,perk:{j:2,k:5}},{id:4,cell:2,perk:{j:5,k:15}},{id:33,cell:2,perk:{j:5,k:9}},{id:24,cell:2,perk:{j:3,k:2}},{id:5,cell:2,perk:{j:5,k:1}},{id:13,cell:1,perk:{j:1,k:2}},{id:6,cell:1,perk:{j:1,k:6}},{id:11,cell:4,perk:{j:2,k:13}},{id:21,cell:5,perk:{j:5,k:1}},{id:12,cell:3,perk:{j:2,k:9}},{id:20,cell:3,perk:{j:5,k:5}},{id:27,cell:3,perk:{j:5,k:7}},{id:15,cell:1,perk:{j:1,k:8}},{id:18,cell:1,perk:{j:5,k:13}},{id:36,cell:3,perk:{j:5,k:10}},{id:19,cell:4,perk:{j:3,k:12}},{id:10,cell:0,perk:{j:0,k:0}},{id:16,cell:5,perk:{j:5,k:10}},{id:23,cell:3,perk:{j:1,k:5}},{id:25,cell:4,perk:{j:4,k:14}},{id:26,cell:1,perk:{j:1,k:7}},{id:1,cell:1,perk:{j:1,k:10}},{id:8,cell:5,perk:{j:4,k:12}},{id:37,cell:4,perk:{j:5,k:12}},{id:28,cell:5,perk:{j:5,k:4}},{id:29,cell:3,perk:{j:2,k:11}},{id:30,cell:3,perk:{j:3,k:7}},{id:31,cell:5,perk:{j:5,k:15}},{id:35,cell:2,perk:{j:2,k:8}},{id:14,cell:3,perk:{j:1,k:1}},{id:3,cell:4,perk:{j:4,k:13}},{id:9,cell:2,perk:{j:4,k:0}},{id:12777,cell:0,perk:{j:0,k:0}},{id:12777,cell:1,perk:{j:0,k:0}},{id:12777,cell:2,perk:{j:0,k:0}},{id:12777,cell:3,perk:{j:0,k:0}},{id:12777,cell:4,perk:{j:0,k:0}},{id:12777,cell:5,perk:{j:0,k:0}}],[{id:32,cell:1,perk:{j:5,k:3}},{id:33,cell:2,perk:{j:4,k:8}},{id:0,cell:5,perk:{j:4,k:9}},{id:22,cell:1,perk:{j:3,k:13}},{id:2,cell:4,perk:{j:2,k:8}},{id:4,cell:3,perk:{j:1,k:8}},{id:17,cell:2,perk:{j:4,k:5}},{id:24,cell:2,perk:{j:2,k:8}},{id:5,cell:2,perk:{j:5,k:1}},{id:6,cell:1,perk:{j:1,k:6}},{id:11,cell:4,perk:{j:4,k:14}},{id:25,cell:4,perk:{j:4,k:6}},{id:12,cell:3,perk:{j:5,k:12}},{id:20,cell:5,perk:{j:3,k:2}},{id:27,cell:1,perk:{j:5,k:7}},{id:15,cell:3,perk:{j:2,k:0}},{id:14,cell:5,perk:{j:3,k:7}},{id:21,cell:5,perk:{j:5,k:5}},{id:18,cell:4,perk:{j:4,k:9}},{id:19,cell:3,perk:{j:3,k:12}},{id:10,cell:0,perk:{j:0,k:0}},{id:13,cell:3,perk:{j:2,k:2}},{id:16,cell:4,perk:{j:5,k:10}},{id:23,cell:1,perk:{j:1,k:5}},{id:26,cell:1,perk:{j:1,k:0}},{id:1,cell:4,perk:{j:3,k:4}},{id:8,cell:3,perk:{j:5,k:8}},{id:28,cell:3,perk:{j:3,k:2}},{id:29,cell:5,perk:{j:5,k:2}},{id:30,cell:2,perk:{j:2,k:6}},{id:31,cell:2,perk:{j:2,k:5}},{id:3,cell:5,perk:{j:2,k:0}},{id:9,cell:4,perk:{j:4,k:0}},{id:12777,cell:0,perk:{j:0,k:0}},{id:12777,cell:1,perk:{j:0,k:0}},{id:12777,cell:2,perk:{j:0,k:0}},{id:12777,cell:3,perk:{j:0,k:0}},{id:12777,cell:4,perk:{j:0,k:0}},{id:12777,cell:5,perk:{j:0,k:0}}],[{id:32,cell:3,perk:{j:5,k:2}},{id:0,cell:4,perk:{j:4,k:13}},{id:17,cell:4,perk:{j:2,k:5}},{id:22,cell:1,perk:{j:3,k:10}},{id:2,cell:2,perk:{j:2,k:13}},{id:4,cell:4,perk:{j:3,k:8}},{id:13,cell:1,perk:{j:1,k:3}},{id:24,cell:5,perk:{j:5,k:10}},{id:5,cell:5,perk:{j:2,k:11}},{id:6,cell:3,perk:{j:1,k:4}},{id:33,cell:4,perk:{j:5,k:9}},{id:11,cell:2,perk:{j:2,k:9}},{id:14,cell:2,perk:{j:1,k:6}},{id:21,cell:1,perk:{j:1,k:5}},{id:12,cell:2,perk:{j:5,k:12}},{id:20,cell:3,perk:{j:5,k:5}},{id:27,cell:1,perk:{j:5,k:4}},{id:15,cell:3,perk:{j:3,k:7}},{id:25,cell:4,perk:{j:4,k:5}},{id:18,cell:5,perk:{j:5,k:13}},{id:19,cell:3,perk:{j:3,k:1}},{id:10,cell:0,perk:{j:0,k:0}},{id:16,cell:5,perk:{j:5,k:1}},{id:23,cell:1,perk:{j:2,k:14}},{id:26,cell:1,perk:{j:5,k:2}},{id:1,cell:5,perk:{j:1,k:10}},{id:8,cell:3,perk:{j:3,k:11}},{id:28,cell:2,perk:{j:4,k:8}},{id:29,cell:2,perk:{j:5,k:15}},{id:30,cell:3,perk:{j:2,k:6}},{id:31,cell:2,perk:{j:2,k:6}},{id:3,cell:5,perk:{j:2,k:8}},{id:9,cell:4,perk:{j:3,k:4}},{id:12777,cell:0,perk:{j:0,k:0}},{id:12777,cell:1,perk:{j:0,k:0}},{id:12777,cell:2,perk:{j:0,k:0}},{id:12777,cell:3,perk:{j:0,k:0}},{id:12777,cell:4,perk:{j:0,k:0}},{id:12777,cell:5,perk:{j:0,k:0}}],[{id:32,cell:5,perk:{j:4,k:6}},{id:0,cell:4,perk:{j:4,k:5}},{id:22,cell:3,perk:{j:1,k:2}},{id:2,cell:3,perk:{j:2,k:13}},{id:4,cell:3,perk:{j:3,k:8}},{id:13,cell:2,perk:{j:1,k:3}},{id:24,cell:5,perk:{j:4,k:8}},{id:5,cell:5,perk:{j:1,k:7}},{id:17,cell:4,perk:{j:2,k:6}},{id:6,cell:4,perk:{j:1,k:5}},{id:11,cell:2,perk:{j:4,k:14}},{id:33,cell:5,perk:{j:2,k:0}},{id:12,cell:2,perk:{j:4,k:5}},{id:20,cell:1,perk:{j:1,k:1}},{id:27,cell:1,perk:{j:5,k:2}},{id:15,cell:3,perk:{j:2,k:0}},{id:18,cell:1,perk:{j:1,k:7}},{id:25,cell:4,perk:{j:4,k:6}},{id:19,cell:3,perk:{j:3,k:1}},{id:10,cell:0,perk:{j:0,k:0}},{id:16,cell:4,perk:{j:5,k:7}},{id:23,cell:1,perk:{j:1,k:8}},{id:26,cell:5,perk:{j:1,k:0}},{id:1,cell:4,perk:{j:1,k:14}},{id:8,cell:1,perk:{j:4,k:12}},{id:14,cell:5,perk:{j:3,k:7}},{id:21,cell:1,perk:{j:5,k:5}},{id:28,cell:3,perk:{j:3,k:2}},{id:29,cell:3,perk:{j:5,k:15}},{id:30,cell:2,perk:{j:5,k:4}},{id:31,cell:2,perk:{j:2,k:5}},{id:3,cell:2,perk:{j:2,k:13}},{id:9,cell:2,perk:{j:5,k:3}},{id:12777,cell:0,perk:{j:0,k:0}},{id:12777,cell:1,perk:{j:0,k:0}},{id:12777,cell:2,perk:{j:0,k:0}},{id:12777,cell:3,perk:{j:0,k:0}},{id:12777,cell:4,perk:{j:0,k:0}},{id:12777,cell:5,perk:{j:0,k:0}}]],perkListLengths=[1,15,15,14,18,16];function GreenLight(){var e=[];if(0==greenLight){for(j=1;j<perkListLengths.length;j++)for(k=0;k<perkListLengths[j];k++)e.push({j:j,k:k,value:2});greenLight=!0,this.postMessage({bonusPerks:e})}}const sortMatrix=(e,l)=>{for(let k=0;k<e.length;++k){if(e[k]<l[k])return-1;if(e[k]>l[k])return 1}return 0};function indexOfPerk(e,l){let k=l.length;for(let r=0;r<k;r++)if(e.k==l[r].k&&e.j==l[r].j)return r;return-1}var lock=[];function checkLockbyID(e,l){for(let k=0;k<lock[l].length;k++)if(e.id==lock[l][k])return!0;return!1}function search(l,r){const p=[1,15,15,14,18,16];var t=[],n=[],o=[0,0,0,0,0,0],f=[],m=[],S=[],s=[!1,!1,!1];filtSet=[];o=[0,0,0,0,0,0];var g=[0,0,0,0,0],u=0,L=0,w=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];tempperk=[];var T=iweapon.length;for(i=0;i<T;i++)f.push(iweapon[i].length);var x=iarmor.length;for(i=0;i<x;i++)m.push(iarmor[i].length);for(i=0;i<x;i++)n.push([]),s.push(!1);var C=l.length;for(j=0;j<T;j++)for(k=0;k<f[j];k++)12777==iweapon[j][k].id&&t.push({e:j,f:k});for(j=0;j<x;j++)for(k=0;k<m[j];k++)12777==iarmor[j][k].id&&n[j].push(k);for(h=0;h<C;h++){for(j=0;j<T;j++)for(k=0;k<f[j];k++)iweapon[j][k].perk.j==l[h].j&&iweapon[j][k].perk.k==l[h].k&&t.push({e:j,f:k});for(j=0;j<x;j++)for(k=0;k<m[j];k++)iarmor[j][k].perk.j==l[h].j&&iarmor[j][k].perk.k==l[h].k&&n[j].push(k)}-1!=lock[0]&&null!=lock[0]&&(t.splice(0),t.push({e:lock[0].j,f:lock[0].k}));for(let e=1;e<lock.length;e++)-1!=lock[e]&&null!=lock[e]&&(n[e-1].splice(0),n[e-1].push(lock[e].k));r.slice();var P=t.length;for(i=0;i<x;i++)S.push(n[i].length);for(i=0;i<r.length;i++)L+=r[i];for(u=12-L,i=0;i<C;i++)o[l[i].j]+=r[i];for(o[5]>0&&(o[5]--,u++),i=0;i<r.length;i++)tempperk.push(r[i]);for(this.console.time("search"),u>11&&GreenLight(),e=0;e<P;e++){for(g[4]=u,h=0;h<C;h++){if(iweapon[t[e].e][t[e].f].perk.k==l[h].k&&iweapon[t[e].e][t[e].f].perk.j==l[h].j){o[l[h].j]>0&&tempperk[h]>0&&u++,o[l[h].j]--,tempperk[h]--,y[4]=l[h].j,w[4]=h;break}y[4]=0,w[4]=20}if(legendaryWeapon||(o[iweapon[t[e].e][t[e].f].cell[0]]>0&&u++,o[iweapon[t[e].e][t[e].f].cell[0]]--,o[iweapon[t[e].e][t[e].f].cell[1]]>0&&u++,o[iweapon[t[e].e][t[e].f].cell[1]]--),legendaryWeapon&&(u+=2),0==greenLight&&u>11&&GreenLight(),u>3)for(a=0;a<S[0];a++){for(g[0]=u,h=0;h<C;h++){if(iarmor[0][n[0][a]].perk.k==l[h].k&&iarmor[0][n[0][a]].perk.j==l[h].j){o[l[h].j]>0&&tempperk[h]>0&&u++,o[l[h].j]--,tempperk[h]--,y[0]=l[h].j,w[0]=h;break}y[0]=0,w[0]=20}if(o[iarmor[0][n[0][a]].cell]>0&&u++,o[iarmor[0][n[0][a]].cell]--,0==greenLight&&u>11&&GreenLight(),u>5)for(b=0;b<S[1];b++){for(g[1]=u,h=0;h<C;h++){if(iarmor[1][n[1][b]].perk.k==l[h].k&&iarmor[1][n[1][b]].perk.j==l[h].j){o[l[h].j]>0&&tempperk[h]>0&&u++,o[l[h].j]--,tempperk[h]--,y[1]=l[h].j,w[1]=h;break}y[1]=0,w[1]=20}if(o[iarmor[1][n[1][b]].cell]>0&&u++,o[iarmor[1][n[1][b]].cell]--,0==greenLight&&u>11&&GreenLight(),u>7)for(g[2]=u,c=0;c<S[2];c++){for(h=0;h<C;h++){if(iarmor[2][n[2][c]].perk.k==l[h].k&&iarmor[2][n[2][c]].perk.j==l[h].j){o[l[h].j]>0&&tempperk[h]>0&&u++,o[l[h].j]--,tempperk[h]--,y[2]=l[h].j,w[2]=h;break}y[2]=0,w[2]=20}if(o[iarmor[2][n[2][c]].cell]>0&&u++,o[iarmor[2][n[2][c]].cell]--,u>9)for(g[3]=u,d=0;d<S[3];d++){for(h=0;h<C;h++){if(iarmor[3][n[3][d]].perk.k==l[h].k&&iarmor[3][n[3][d]].perk.j==l[h].j){o[l[h].j]>0&&tempperk[h]>0&&u++,o[l[h].j]--,tempperk[h]--,y[3]=l[h].j,w[3]=h;break}y[3]=0,w[3]=20}o[iarmor[3][n[3][d]].cell]>0&&u++,o[iarmor[3][n[3][d]].cell]--,u>11&&(filtSet.push([n[0][a],n[1][b],n[2][c],n[3][d],t[e].e,t[e].f]),0),u=g[3],0!=y[3]&&o[y[3]]++,o[iarmor[3][n[3][d]].cell]++,20!=w[3]&&tempperk[w[3]]++}u=g[2],0!=y[2]&&o[y[2]]++,o[iarmor[2][n[2][c]].cell]++,20!=w[2]&&tempperk[w[2]]++}u=g[1],0!=y[1]&&o[y[1]]++,o[iarmor[1][n[1][b]].cell]++,20!=w[1]&&tempperk[w[1]]++}u=g[0],0!=y[0]&&o[y[0]]++,o[iarmor[0][n[0][a]].cell]++,20!=w[0]&&tempperk[w[0]]++}u=g[4],0!=y[4]&&o[y[4]]++,legendaryWeapon||(o[iweapon[t[e].e][t[e].f].cell[0]]++,o[iweapon[t[e].e][t[e].f].cell[1]]++),20!=w[4]&&tempperk[w[4]]++}filtSet=filtSet.sort(sortMatrix),this.console.timeEnd("search");var v,W=[],M=[],R=[],E=[],F=filtSet.length,G=[],O=x+3,D=p.length;for(i=0;i<O;i++)G.push(!1),M.push(0);for(i=0;i<D;i++)W.push(0);for(i=0;i<C;i++)tempperk[i]=r[i];if(0==greenLight){for(j=1;j<p.length;j++)for(k=0;k<p[j];k++)R.push({j:j,k:k,value:0});for(let e=0;e<F;e++){for(filtSetCells.push([]),E=[],v=[],j=0;j<O;j++)filtSetCells[e].push({j:0,k:0}),G[j]=!1,M[j]=0;for(h=0;h<C;h++)tempperk[h]=r[h];for(h=0;h<C;h++)for(iweapon[filtSet[e][x]][filtSet[e][x+1]].perk.k==l[h].k&&iweapon[filtSet[e][x]][filtSet[e][x+1]].perk.j==l[h].j&&tempperk[h]--,j=0;j<x;j++)iarmor[j][filtSet[e][j]].perk.k==l[h].k&&iarmor[j][filtSet[e][j]].perk.j==l[h].j&&tempperk[h]--;for(h=0;h<C;h++){for(j=0;j<x;j++)iarmor[j][filtSet[e][j]].cell==l[h].j&&tempperk[h]>0&&0==G[j]&&(filtSetCells[e][j].j=l[h].j,filtSetCells[e][j].k=l[h].k,G[j]=!0,tempperk[h]--);5==l[h].j&&tempperk[h]>0&&0==G[x+2]&&(filtSetCells[e][x+2].j=l[h].j,filtSetCells[e][x+2].k=l[h].k,G[x+2]=!0,tempperk[h]--),legendaryWeapon?(tempperk[h]>0&&0==G[x]&&(filtSetCells[e][x].j=l[h].j,filtSetCells[e][x].k=l[h].k,G[x]=!0,tempperk[h]--),tempperk[h]>0&&0==G[x+1]&&(filtSetCells[e][x+1].j=l[h].j,filtSetCells[e][x+1].k=l[h].k,G[x+1]=!0,tempperk[h]--)):(iweapon[filtSet[e][x]][filtSet[e][x+1]].cell[0]==l[h].j&&tempperk[h]>0&&0==G[x]&&(filtSetCells[e][x].j=l[h].j,filtSetCells[e][x].k=l[h].k,G[x]=!0,tempperk[h]--),iweapon[filtSet[e][x]][filtSet[e][x+1]].cell[1]==l[h].j&&tempperk[h]>0&&0==G[x+1]&&(filtSetCells[e][x+1].j=l[h].j,filtSetCells[e][x+1].k=l[h].k,G[x+1]=!0,tempperk[h]--))}for(j=0;j<x;j++)0==G[j]&&(M[iarmor[j][filtSet[e][j]].cell]++,W[iarmor[j][filtSet[e][j]].cell]<M[iarmor[j][filtSet[e][j]].cell]&&(W[iarmor[j][filtSet[e][j]].cell]=M[iarmor[j][filtSet[e][j]].cell]));if(legendaryWeapon){if(0==G[x+1]&&0==G[x])for(let e=1;e<p.length;e++)M[e]+=2,W[e]<M[e]&&(W[e]=M[e]);else if(0==G[x+1]||0==G[x])for(let e=1;e<p.length;e++)M[e]++,W[e]<M[e]&&(W[e]=M[e])}else 0==G[x]&&(M[iweapon[filtSet[e][x]][filtSet[e][x+1]].cell[0]]++,W[iweapon[filtSet[e][x]][filtSet[e][x+1]].cell[0]]<M[iweapon[filtSet[e][x]][filtSet[e][x+1]].cell[0]]&&(W[iweapon[filtSet[e][x]][filtSet[e][x+1]].cell[0]]=M[iweapon[filtSet[e][x]][filtSet[e][x+1]].cell[0]])),0==G[x+1]&&(M[iweapon[filtSet[e][x]][filtSet[e][x+1]].cell[1]]++,W[iweapon[filtSet[e][x]][filtSet[e][x+1]].cell[1]]<M[iweapon[filtSet[e][x]][filtSet[e][x+1]].cell[1]]&&(W[iweapon[filtSet[e][x]][filtSet[e][x+1]].cell[1]]=M[iweapon[filtSet[e][x]][filtSet[e][x+1]].cell[1]]));for(0==G[x+2]&&(M[5]++,M[5]>W[5]&&(W[5]=M[5])),j=0;j<x;j++)if(12777==iarmor[j][filtSet[e][j]].id)for(k=0;k<m[j];k++)iarmor[j][k].cell==iarmor[j][filtSet[e][j]].cell&&0!=iarmor[j][k].perk.j&&0!=iarmor[j][k].perk.k&&E.push([iarmor[j][k].perk.j,iarmor[j][k].perk.k,j]);else E.push([iarmor[j][filtSet[e][j]].perk.j,iarmor[j][filtSet[e][j]].perk.k,j]);if(12777==iweapon[filtSet[e][x]][filtSet[e][x+1]].id)for(j=0;j<T;j++)for(k=0;k<f[j];k++)(iweapon[filtSet[e][x]][filtSet[e][x+1]].cell[0]==iweapon[j][k].cell[0]&&iweapon[filtSet[e][x]][filtSet[e][x+1]].cell[1]==iweapon[j][k].cell[1]||iweapon[filtSet[e][x]][filtSet[e][x+1]].cell[1]==iweapon[j][k].cell[0]&&iweapon[filtSet[e][x]][filtSet[e][x+1]].cell[0]==iweapon[j][k].cell[1])&&0!=iweapon[j][k].perk.j&&0!=iweapon[j][k].perk.k&&E.push([iweapon[j][k].perk.j,iweapon[j][k].perk.k,5]);else E.push([iweapon[filtSet[e][x]][filtSet[e][x+1]].perk.j,iweapon[filtSet[e][x]][filtSet[e][x+1]].perk.k,5]);E.sort(sortMatrix);let i=E.length,t=E.length-1;if(null!=E[0]){let e=-1;for(j=0;j<i;j++)if(j<t&&E[j][1]==E[j+1][1]&&E[j][0]==E[j+1][0]&&E[j+1][2]!=E[j][2]?(v.push({j:E[j][0],k:E[j][1],value:2}),j++,e++):(v.push({j:E[j][0],k:E[j][1],value:1}),v[++e].value+=M[v[e].j]),0!=v[e].j&&0!=v[e].k){let l=indexOfPerk(v[e],R);R[l].value<v[e].value&&(R[l].value=v[e].value)}}}var I=[];let e=0;for(R.length;e<R.length;e++)R[e].value<W[R[e].j]&&(R[e].value=W[R[e].j]),I.push({j:R[e].j,k:R[e].k,value:R[e].value});this.postMessage({bonusPerks:I})}}function ExpandfiltSetelem(e,l){let k,r=[],i=e.length;if(l==armorTypeLength)for(let l=0;l<i;l++)for(let i=0;i<weaponTypeLength;i++)for(let p=0;p<weaponLength[i];p++)(iweapon[i][p].cell[0]==iweapon[e[l][armorTypeLength]][e[l][armorTypeLength+1]].cell[0]&&iweapon[i][p].cell[1]==iweapon[e[l][armorTypeLength]][e[l][armorTypeLength+1]].cell[1]||iweapon[i][p].cell[1]==iweapon[e[l][armorTypeLength]][e[l][armorTypeLength+1]].cell[0]&&iweapon[i][p].cell[0]==iweapon[e[l][armorTypeLength]][e[l][armorTypeLength+1]].cell[1])&&12777!=iweapon[i][p].id&&((k=e[l].slice())[armorTypeLength]=i,k[armorTypeLength+1]=p,r.push(k));else for(let p=0;p<i;p++)for(let i=0;i<armorLength[l];i++)iarmor[l][e[p][l]].cell==iarmor[l][i].cell&&12777!=iarmor[l][i].id&&((k=e[p].slice())[l]=i,r.push(k));return r}function ExpandRecursivefiltSetelem(e,l){let k=l.length,r=ExpandfiltSetelem(e,l[0]);for(let e=1;e<k;e++)r=ExpandfiltSetelem(r,l[e]);return r}const sortFunction=(e,l)=>{let k=e.length;for(let r=0;r<k;r++)return e[r]<l[r]?-1:1;return 0};function processFiltSetelem(e){let l=[],k=[],r=!0;if(1==greenLight){for(filtSetCells.push([]),tempbonusPerkMat=[],tempbonusPerk=[],j=0;j<setWidth;j++)filtSetCells[e].push({j:0,k:0}),l[j]=!1;for(h=0;h<indexPerkLength;h++)tempperk[h]=indexPerkRank[h];for(h=0;h<indexPerkLength;h++)for(iweapon[filtSet[e][armorTypeLength]][filtSet[e][armorTypeLength+1]].perk.k==indexPerk[h].k&&iweapon[filtSet[e][armorTypeLength]][filtSet[e][armorTypeLength+1]].perk.j==indexPerk[h].j&&tempperk[h]--,j=0;j<armorTypeLength;j++)iarmor[j][filtSet[e][j]].perk.k==indexPerk[h].k&&iarmor[j][filtSet[e][j]].perk.j==indexPerk[h].j&&tempperk[h]--;for(h=0;h<indexPerkLength;h++){for(j=0;j<armorTypeLength;j++)iarmor[j][filtSet[e][j]].cell==indexPerk[h].j&&tempperk[h]>0&&0==l[j]&&(filtSetCells[e][j].j=indexPerk[h].j,filtSetCells[e][j].k=indexPerk[h].k,l[j]=!0,tempperk[h]--);5==indexPerk[h].j&&tempperk[h]>0&&0==l[armorTypeLength+2]&&(filtSetCells[e][armorTypeLength+2].j=indexPerk[h].j,filtSetCells[e][armorTypeLength+2].k=indexPerk[h].k,l[armorTypeLength+2]=!0,tempperk[h]--),legendaryWeapon?(tempperk[h]>0&&0==l[armorTypeLength]&&(filtSetCells[e][armorTypeLength].j=indexPerk[h].j,filtSetCells[e][armorTypeLength].k=indexPerk[h].k,l[armorTypeLength]=!0),tempperk[h]--,tempperk[h]>0&&0==l[armorTypeLength+1]&&(filtSetCells[e][armorTypeLength+1].j=indexPerk[h].j,filtSetCells[e][armorTypeLength+1].k=indexPerk[h].k,l[armorTypeLength+1]=!0,tempperk[h]--)):(iweapon[filtSet[e][armorTypeLength]][filtSet[e][armorTypeLength+1]].cell[0]==indexPerk[h].j&&tempperk[h]>0&&0==l[armorTypeLength]&&(filtSetCells[e][armorTypeLength].j=indexPerk[h].j,filtSetCells[e][armorTypeLength].k=indexPerk[h].k,l[armorTypeLength]=!0,tempperk[h]--),iweapon[filtSet[e][armorTypeLength]][filtSet[e][armorTypeLength+1]].cell[1]==indexPerk[h].j&&tempperk[h]>0&&0==l[armorTypeLength+1]&&(filtSetCells[e][armorTypeLength+1].j=indexPerk[h].j,filtSetCells[e][armorTypeLength+1].k=indexPerk[h].k,l[armorTypeLength+1]=!0,tempperk[h]--))}}for(let l=0;l<armorTypeLength;l++)12777==iarmor[l][filtSet[e][l]].id&&(r=!1,k.push(l));return 12777==iweapon[filtSet[e][armorTypeLength]][filtSet[e][armorTypeLength+1]].id&&(r=!1,k.push(armorTypeLength)),saveSet=0==r?{id:ExpandRecursivefiltSetelem([filtSet[e]],k),cell:filtSetCells[e]}:{id:[filtSet[e]],cell:filtSetCells[e]},saveSet.id.length>1&&null!=saveSet.id[0][0]&&(saveSet.id=saveSet.id.sort(sortFunction)),k.splice(0),r=!0,saveSet}var indexPerk,indexPerkRank,indexPerkLength,setWidth,armorTypeLength,weaponTypeLength,legendaryWeapon=!1,filtSetCount=0,filtSetLength=0,cacheSet=[],cacheSetCount=0,cacheSetLength=0,setCount=0,weaponLength=[],armorLength=[];self.onmessage=function(e){if(null!=e.data.indexPerk){for(indexPerk=e.data.indexPerk,indexPerkRank=e.data.indexPerkRank,indexPerkLength=indexPerk.length,legendaryWeapon=e.data.legendaryWeapon,lock=e.data.lock,setWidth=iarmor.length+3,armorTypeLength=iarmor.length,weaponTypeLength=iweapon.length,i=0;i<weaponTypeLength;i++)weaponLength.push(iweapon[i].length);for(i=0;i<armorTypeLength;i++)armorLength.push(iarmor[i].length);for(greenLight=!1,filtSetCells=[],filtSet=[],cacheSets=[],labelCount=0,search(indexPerk,indexPerkRank,lock),filtSetLength=filtSet.length,cacheSet=processFiltSetelem(filtSetCount),cacheSetLength=cacheSet.id.length,filtSetCount++,cacheSets.push(cacheSet),cacheSetCount++;filtSetCount<filtSetLength&&filtSetCount<100;)cacheSetCount=0,cacheSet=processFiltSetelem(filtSetCount),cacheSetLength=cacheSet.id.length-3,filtSetCount++,cacheSets.push(cacheSet),cacheSetCount++;this.postMessage(cacheSets),self.close()}};