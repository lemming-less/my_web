define(["exports","./Matrix3-81054f0f","./PolylineVolumeGeometryLibrary-664193d8","./defaultValue-f6d5e6da","./Math-2ce22ee9","./PolylinePipeline-5ae670bc","./Transforms-20461479"],(function(a,e,n,t,r,i,s){"use strict";const o={},l=new e.Cartesian3,C=new e.Cartesian3,y=new e.Cartesian3,c=new e.Cartesian3,u=[new e.Cartesian3,new e.Cartesian3],d=new e.Cartesian3,p=new e.Cartesian3,m=new e.Cartesian3,g=new e.Cartesian3,f=new e.Cartesian3,h=new e.Cartesian3,w=new e.Cartesian3,x=new e.Cartesian3,z=new e.Cartesian3,P=new e.Cartesian3,A=new s.Quaternion,B=new e.Matrix3;function E(a,t,i,o,y){const c=e.Cartesian3.angleBetween(e.Cartesian3.subtract(t,a,l),e.Cartesian3.subtract(i,a,C)),u=o===n.CornerType.BEVELED?1:Math.ceil(c/r.CesiumMath.toRadians(5))+1,d=3*u,p=new Array(d);let m;p[d-3]=i.x,p[d-2]=i.y,p[d-1]=i.z,m=y?e.Matrix3.fromQuaternion(s.Quaternion.fromAxisAngle(e.Cartesian3.negate(a,l),c/u,A),B):e.Matrix3.fromQuaternion(s.Quaternion.fromAxisAngle(a,c/u,A),B);let g=0;t=e.Cartesian3.clone(t,l);for(let n=0;n<u;n++)t=e.Matrix3.multiplyByVector(m,t,t),p[g++]=t.x,p[g++]=t.y,p[g++]=t.z;return p}function S(a,n,t,r){let i=l;return r||(n=e.Cartesian3.negate(n,n)),i=e.Cartesian3.add(a,n,i),[i.x,i.y,i.z,t.x,t.y,t.z]}function b(a,n,t,r){const i=new Array(a.length),s=new Array(a.length),o=e.Cartesian3.multiplyByScalar(n,t,l),u=e.Cartesian3.negate(o,C);let d=0,p=a.length-1;for(let l=0;l<a.length;l+=3){const n=e.Cartesian3.fromArray(a,l,y),t=e.Cartesian3.add(n,u,c);i[d++]=t.x,i[d++]=t.y,i[d++]=t.z;const r=e.Cartesian3.add(n,o,c);s[p--]=r.z,s[p--]=r.y,s[p--]=r.x}return r.push(i,s),r}o.addAttribute=function(a,e,n,r){const i=e.x,s=e.y,o=e.z;t.defined(n)&&(a[n]=i,a[n+1]=s,a[n+2]=o),t.defined(r)&&(a[r]=o,a[r-1]=s,a[r-2]=i)};const D=new e.Cartesian3,M=new e.Cartesian3;o.computePositions=function(a){const t=a.granularity,s=a.positions,o=a.ellipsoid,C=a.width/2,y=a.cornerType,c=a.saveAttributes;let A=d,B=p,T=m,N=g,L=f,V=h,O=w,R=x,Q=z,U=P,v=[];const G=c?[]:void 0,I=c?[]:void 0;let q,j=s[0],k=s[1];B=e.Cartesian3.normalize(e.Cartesian3.subtract(k,j,B),B),A=o.geodeticSurfaceNormal(j,A),N=e.Cartesian3.normalize(e.Cartesian3.cross(A,B,N),N),c&&(G.push(N.x,N.y,N.z),I.push(A.x,A.y,A.z)),O=e.Cartesian3.clone(j,O),j=k,T=e.Cartesian3.negate(B,T);const F=[];let H;const J=s.length;for(H=1;H<J-1;H++){A=o.geodeticSurfaceNormal(j,A),k=s[H+1],B=e.Cartesian3.normalize(e.Cartesian3.subtract(k,j,B),B),L=e.Cartesian3.normalize(e.Cartesian3.add(B,T,L),L);const a=e.Cartesian3.multiplyByScalar(A,e.Cartesian3.dot(B,A),D);e.Cartesian3.subtract(B,a,a),e.Cartesian3.normalize(a,a);const d=e.Cartesian3.multiplyByScalar(A,e.Cartesian3.dot(T,A),M);if(e.Cartesian3.subtract(T,d,d),e.Cartesian3.normalize(d,d),!r.CesiumMath.equalsEpsilon(Math.abs(e.Cartesian3.dot(a,d)),1,r.CesiumMath.EPSILON7)){L=e.Cartesian3.cross(L,A,L),L=e.Cartesian3.cross(A,L,L),L=e.Cartesian3.normalize(L,L);const a=C/Math.max(.25,e.Cartesian3.magnitude(e.Cartesian3.cross(L,T,l))),r=n.PolylineVolumeGeometryLibrary.angleIsGreaterThanPi(B,T,j,o);L=e.Cartesian3.multiplyByScalar(L,a,L),r?(R=e.Cartesian3.add(j,L,R),U=e.Cartesian3.add(R,e.Cartesian3.multiplyByScalar(N,C,U),U),Q=e.Cartesian3.add(R,e.Cartesian3.multiplyByScalar(N,2*C,Q),Q),u[0]=e.Cartesian3.clone(O,u[0]),u[1]=e.Cartesian3.clone(U,u[1]),q=i.PolylinePipeline.generateArc({positions:u,granularity:t,ellipsoid:o}),v=b(q,N,C,v),c&&(G.push(N.x,N.y,N.z),I.push(A.x,A.y,A.z)),V=e.Cartesian3.clone(Q,V),N=e.Cartesian3.normalize(e.Cartesian3.cross(A,B,N),N),Q=e.Cartesian3.add(R,e.Cartesian3.multiplyByScalar(N,2*C,Q),Q),O=e.Cartesian3.add(R,e.Cartesian3.multiplyByScalar(N,C,O),O),y===n.CornerType.ROUNDED||y===n.CornerType.BEVELED?F.push({leftPositions:E(R,V,Q,y,r)}):F.push({leftPositions:S(j,e.Cartesian3.negate(L,L),Q,r)})):(Q=e.Cartesian3.add(j,L,Q),U=e.Cartesian3.add(Q,e.Cartesian3.negate(e.Cartesian3.multiplyByScalar(N,C,U),U),U),R=e.Cartesian3.add(Q,e.Cartesian3.negate(e.Cartesian3.multiplyByScalar(N,2*C,R),R),R),u[0]=e.Cartesian3.clone(O,u[0]),u[1]=e.Cartesian3.clone(U,u[1]),q=i.PolylinePipeline.generateArc({positions:u,granularity:t,ellipsoid:o}),v=b(q,N,C,v),c&&(G.push(N.x,N.y,N.z),I.push(A.x,A.y,A.z)),V=e.Cartesian3.clone(R,V),N=e.Cartesian3.normalize(e.Cartesian3.cross(A,B,N),N),R=e.Cartesian3.add(Q,e.Cartesian3.negate(e.Cartesian3.multiplyByScalar(N,2*C,R),R),R),O=e.Cartesian3.add(Q,e.Cartesian3.negate(e.Cartesian3.multiplyByScalar(N,C,O),O),O),y===n.CornerType.ROUNDED||y===n.CornerType.BEVELED?F.push({rightPositions:E(Q,V,R,y,r)}):F.push({rightPositions:S(j,L,R,r)})),T=e.Cartesian3.negate(B,T)}j=k}let K;return A=o.geodeticSurfaceNormal(j,A),u[0]=e.Cartesian3.clone(O,u[0]),u[1]=e.Cartesian3.clone(j,u[1]),q=i.PolylinePipeline.generateArc({positions:u,granularity:t,ellipsoid:o}),v=b(q,N,C,v),c&&(G.push(N.x,N.y,N.z),I.push(A.x,A.y,A.z)),y===n.CornerType.ROUNDED&&(K=function(a){let t=d,r=p,i=m,s=a[1];r=e.Cartesian3.fromArray(a[1],s.length-3,r),i=e.Cartesian3.fromArray(a[0],0,i),t=e.Cartesian3.midpoint(r,i,t);const o=E(t,r,i,n.CornerType.ROUNDED,!1),l=a.length-1,C=a[l-1];return s=a[l],r=e.Cartesian3.fromArray(C,C.length-3,r),i=e.Cartesian3.fromArray(s,0,i),t=e.Cartesian3.midpoint(r,i,t),[o,E(t,r,i,n.CornerType.ROUNDED,!1)]}(v)),{positions:v,corners:F,lefts:G,normals:I,endPositions:K}};var T=o;a.CorridorGeometryLibrary=T}));