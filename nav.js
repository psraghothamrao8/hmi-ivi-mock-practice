(function(){
var p=[["index.html","Start Here"],["learn.html","1. Basics"],["automotive.html","2. Automotive A–Z"],["simulator.html","3. Mock Car"],["eyetest.html","4. Eye Test"],["defects.html","5. Defects"],["interview.html","6. Interview Q&amp;A"],["quiz.html","7. Quiz &amp; Mock"],["doubts.html","💬 My Doubts"]];
var cur=location.pathname.split("/").pop()||"index.html";
document.body.insertAdjacentHTML("afterbegin","<nav><b>🚗 HMI/IVI Prep</b>"+p.map(function(x){return '<a href="'+x[0]+'"'+(x[0]==cur?' class="on"':'')+'>'+x[1]+'</a>'}).join("")+"</nav>");
})();

/* ---------- Jargon buster: simple meanings shown on hover / tap ---------- */
var JARGON={
"HMI":"Human Machine Interface – everything the driver sees, hears or touches to use the car (screens, buttons, warning lights, sounds).",
"IVI":"In-Vehicle Infotainment – the centre touch screen: music, phone, maps, AC, settings.",
"ECU":"Electronic Control Unit – a small computer inside the car. A modern car has 50–150 of them.",
"CAN FD":"CAN with Flexible Data-rate – a newer, faster CAN that carries more data per message (up to 64 bytes instead of 8).",
"CAN":"Controller Area Network – the main 'wire road' that ECUs use to send small messages to each other.",
"LIN":"Local Interconnect Network – a slow, cheap, simple network for small things like window switches, seat motors and mirrors.",
"FlexRay":"A fast and very reliable car network, used for things like advanced braking/steering. Older and rarer now.",
"Automotive Ethernet":"Very fast network in cars (like office internet cables, but for cars) – used for cameras, big screens and software updates.",
"SOME/IP":"A way for ECUs to call 'services' on each other over Automotive Ethernet (like apps calling each other).",
"DBC":"A 'dictionary' file that explains which bytes in a CAN message are which signal (e.g. bytes 0–1 = speed × 0.01).",
"Gateway":"An ECU that acts like a post office: it passes messages between different networks in the car.",
"UDS":"Unified Diagnostic Services – a standard set of 'questions and commands' a tester tool can send to an ECU (read errors, read version, flash software).",
"DTC":"Diagnostic Trouble Code – an error code an ECU saves when something goes wrong, e.g. P0301. Like a note: 'I saw a problem here'.",
"OBD":"On-Board Diagnostics – the standard plug under the dashboard where mechanics connect a tool to read error codes.",
"HIL":"Hardware-in-the-Loop – the REAL ECU/screen is connected to a computer that PRETENDS to be the rest of the car. Most HMI bench testing is like this.",
"SIL":"Software-in-the-Loop – the real code runs on a normal PC, with the car simulated. No real hardware.",
"MIL":"Model-in-the-Loop – testing a drawing/math model of the software, before real code exists.",
"ASIL":"Automotive Safety Integrity Level – how dangerous a failure could be: QM (not safety related), then A (lowest) to D (highest, e.g. brakes).",
"ASPICE":"Automotive SPICE – a rule book for HOW car software must be made and tested (documents, reviews, traceability). Car companies audit suppliers against it.",
"AUTOSAR":"A common standard for how ECU software is structured, so parts from different companies fit together like LEGO.",
"ISO 26262":"The international standard for functional safety of car electronics – making sure electronic failures don't hurt people.",
"ISO 15008":"A standard for in-car displays: text size, contrast and readability so the driver can read quickly.",
"ISO 2575":"A standard that defines the symbols (icons) used for car warning lights and controls.",
"NHTSA":"US road safety agency. Its guideline: a single glance at the screen should be ≤ 2 seconds and a task ≤ 12 seconds total eyes-off-road.",
"OTA":"Over-The-Air update – updating the car's software through the internet, like a phone update.",
"ADB":"Android Debug Bridge – a laptop command-line tool to talk to an Android device (read logs, take screenshots, install apps).",
"logcat":"The live log 'diary' of an Android device. Testers save it and attach it to defects.",
"ANR":"Application Not Responding – an Android app froze for about 5 seconds or more.",
"tombstone":"A crash report file Android writes when a low-level (native) program crashes.",
"dumpsys":"An ADB command that dumps the current state of Android services (e.g. which app is on screen, Bluetooth state).",
"DLT":"Diagnostic Log and Trace – a common logging system in car ECUs (like logcat, but for automotive ECUs). Viewed with a 'DLT Viewer' tool.",
"APK":"An Android app installation file.",
"ETA":"Estimated Time of Arrival – the time navigation thinks you will reach.",
"A2DP":"Bluetooth profile for streaming music from phone to car.",
"AVRCP":"Bluetooth profile for remote control of music: play, pause, next, and showing song title.",
"HFP":"Hands-Free Profile – Bluetooth profile for phone calls through the car speakers and mic.",
"PBAP":"Phone Book Access Profile – Bluetooth profile that copies your contacts and call history to the car.",
"STLC":"Software Testing Life Cycle – the steps of testing: understand requirements → plan → write tests → set up → run → report → close.",
"SDLC":"Software Development Life Cycle – all steps of building software: requirements, design, coding, testing, release, maintenance.",
"ETL":"Extract, Transform, Load – moving data from a source to a target system (and checking it moved correctly).",
"Jira":"A popular tool to log and track defects and tasks.",
"telltale":"A warning or indicator light on the cluster (e.g. seatbelt, engine, low fuel). It 'tells a tale' about the car's state.",
"regression":"Re-testing old features after a change, to make sure nothing that worked before is now broken.",
"flaky":"A test that sometimes passes and sometimes fails without any change – unreliable.",
"firmware":"Software stored inside a hardware device (like an ECU).",
"OEM":"Original Equipment Manufacturer – the car company (e.g. Tata, BMW, Mercedes). The final customer.",
"Tier 1":"A big supplier that makes complete parts for the car company (e.g. Bosch, Continental, Harman make IVI/cluster units).",
"SOP":"Start Of Production – the date when the car starts being built in the factory. Software must be ready before this.",
"ADAS":"Advanced Driver Assistance Systems – lane keep, adaptive cruise, emergency braking. They show warnings on the HMI.",
"GNSS":"Global Navigation Satellite System – satellite positioning (GPS is one of them; others: NavIC, Galileo, GLONASS).",
"DAB":"Digital Audio Broadcasting – digital radio (clearer than FM, shows station info).",
"RDS":"Radio Data System – extra text sent with FM radio, like the station name and song title.",
"CarPlay":"Apple's system to show your iPhone apps on the car screen.",
"Android Auto":"Google's system to show your Android phone apps on the car screen.",
"Android Automotive":"A full Android operating system running inside the car itself (no phone needed).",
"QNX":"A very stable operating system often used for instrument clusters (safety important).",
"CANoe":"A Vector tool to simulate, send and watch CAN/LIN/Ethernet signals – the most common signal simulation tool in automotive testing.",
"CANalyzer":"A Vector tool mainly to WATCH and analyse network messages (lighter than CANoe).",
"dSPACE":"A company making HIL test systems (big simulators that pretend to be the car).",
"bus load":"How busy the CAN network is (in %). Too high = messages can be delayed.",
"payload":"The actual data part of a message (not the ID or headers).",
"hexadecimal":"A number system with 16 digits: 0–9 then A–F (A=10 … F=15). 0xFF = 255. Used for CAN IDs and data.",
"byte":"8 bits. One byte holds a number from 0 to 255 (in hex: 00 to FF).",
"KL15":"'Terminal 15' – the ignition-ON power line. KL15 ON = ignition on.",
"KL30":"'Terminal 30' – the always-ON battery power line.",
"V-model":"A development model shaped like a V: left side = requirements and design, right side = matching test levels.",
"traceability":"Being able to link each requirement ↔ its test cases ↔ test results ↔ defects.",
"RTM":"Requirement Traceability Matrix – a table that maps each requirement to the test cases that cover it.",
"triage":"A meeting/process to review new defects and decide severity, priority and who fixes them.",
"test bench":"A desk set-up with real car parts (IVI, cluster, power supply, network tools) so you can test without a car.",
"bulb check":"At ignition ON, all warning lights flash briefly to prove they work. Normal behaviour.",
"ducking":"Lowering music volume while a navigation voice or call is playing, then raising it back.",
"Bluetooth":"Short-range wireless used to connect your phone to the car (calls, music, contacts).",
"UAT":"User Acceptance Testing – final testing by the customer/user to accept the product.",
"Jenkins":"A tool that runs jobs automatically (e.g. start test suites when a new build arrives).",
"Selenium":"A tool to automate web browsers (click, type, check) – used for web app test automation.",
"Agile":"Working in short cycles (sprints, usually 2 weeks) with regular feedback.",
"sprint":"A short fixed work period in Agile, usually 2 weeks.",
"exploratory":"Testing by exploring freely, learning and designing tests at the same time (not from a written script).",
"latency":"Delay – time between an action and the result (e.g. tap → screen reacts).",
"boundary value":"Testing at the limits and right next to them (e.g. 15, 16, 17 if the minimum is 16).",
"equivalence":"Grouping inputs that behave the same, and testing one from each group instead of all.",
"Polarion":"A tool to manage requirements and test cases (common in automotive).",
"DOORS":"IBM tool to write and manage requirements (common in automotive).",
"Xray":"A Jira add-on to manage test cases and test runs.",
"Zephyr":"A Jira add-on to manage test cases and test runs.",
"vTESTstudio":"Vector tool to design automated tests that run in CANoe.",
"ECU-TEST":"A tool (by tracetronic) to build and run automated tests for ECUs and HIL benches.",
"cluster":"The instrument cluster – the display behind the steering wheel (speed, fuel, warnings)."
};
function jargonize(root){
 if(!root)return;
 var keys=Object.keys(JARGON).sort(function(a,b){return b.length-a.length});
 function esc(s){return s.replace(/[.*+?^${}()|[\]\\\/]/g,'\\$&')}
 var cs=keys.filter(function(k){return k===k.toUpperCase()}),ci=keys.filter(function(k){return k!==k.toUpperCase()});
 var B1='(?<![A-Za-z0-9])(',B2=')(?![A-Za-z0-9])';
 var reCS=new RegExp(B1+cs.map(esc).join('|')+B2,'g'),reCI=new RegExp(B1+ci.map(esc).join('|')+B2,'gi');
 var seen={},SKIP=['PRE','CODE','SCRIPT','STYLE','A','BUTTON','SUMMARY','ABBR','INPUT','TEXTAREA','SELECT','OPTION','NAV','H1','TH','LABEL'],SKIPC=['nojarg','car','scene','log'];
 var walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(n){
  for(var e=n.parentNode;e&&e!==root.parentNode;e=e.parentNode){if(e.nodeType===1&&(e instanceof SVGElement||SKIP.indexOf(e.tagName)>-1||SKIPC.some(function(c){return e.classList.contains(c)})))return NodeFilter.FILTER_REJECT}
  return NodeFilter.FILTER_ACCEPT}});
 var nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
 nodes.forEach(function(n){
  var t=n.nodeValue,m,hits=[];
  [reCS,reCI].forEach(function(re){re.lastIndex=0;while((m=re.exec(t))){var key=keys.filter(function(k){return k.toLowerCase()===m[1].toLowerCase()})[0];hits.push({i:m.index,s:m[1],k:key})}});
  hits.sort(function(a,b){return a.i-b.i||b.s.length-a.s.length});
  var keep=[],end=-1;hits.forEach(function(h){if(h.i>=end&&!seen[h.k]){seen[h.k]=1;keep.push(h);end=h.i+h.s.length}});
  if(!keep.length)return;
  var frag=document.createDocumentFragment(),pos=0;
  keep.forEach(function(h){frag.appendChild(document.createTextNode(t.slice(pos,h.i)));var a=document.createElement('abbr');a.className='j';a.tabIndex=0;a.textContent=h.s;a.dataset.t=h.k+': '+JARGON[h.k];frag.appendChild(a);pos=h.i+h.s.length});
  frag.appendChild(document.createTextNode(t.slice(pos)));n.parentNode.replaceChild(frag,n);
 });
}
(function(){
 var st=document.createElement('style');st.textContent='abbr.j{text-decoration:none;border-bottom:2px dotted var(--brand,#2563eb);cursor:help}#jtip{position:fixed;z-index:999;max-width:320px;background:#1e293b;color:#f8fafc;padding:10px 12px;border-radius:10px;font-size:14px;line-height:1.45;box-shadow:0 6px 24px rgba(0,0,0,.35);display:none}#jtip b{color:#93c5fd}';document.head.appendChild(st);
 var tip=document.createElement('div');tip.id='jtip';document.body.appendChild(tip);
 function show(a){var t=a.dataset.t,i=t.indexOf(': ');tip.innerHTML='<b>'+t.slice(0,i)+'</b> – '+t.slice(i+2).replace(/</g,'&lt;');tip.style.display='block';var r=a.getBoundingClientRect(),w=Math.min(320,innerWidth-24);tip.style.maxWidth=w+'px';var x=Math.max(12,Math.min(r.left,innerWidth-w-12));tip.style.left=x+'px';var y=r.bottom+8;if(y+tip.offsetHeight>innerHeight-8)y=r.top-tip.offsetHeight-8;tip.style.top=y+'px'}
 document.addEventListener('mouseover',function(e){var a=e.target.closest&&e.target.closest('abbr.j');if(a)show(a)});
 document.addEventListener('mouseout',function(e){if(e.target.closest&&e.target.closest('abbr.j'))tip.style.display='none'});
 document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('abbr.j');if(a){show(a);e.stopPropagation()}else tip.style.display='none'},true);
 document.addEventListener('scroll',function(){tip.style.display='none'},true);
 var m=document.querySelector('main');if(m)jargonize(m);
 var b=document.createElement('div');b.className='tip nojarg';b.style.cssText='font-size:14px;margin:0 0 12px';b.innerHTML='💡 <b>Words with a dotted underline</b> have a simple meaning – hover or tap them.';if(m&&m.firstElementChild)m.insertBefore(b,m.firstElementChild.nextSibling);
})();
