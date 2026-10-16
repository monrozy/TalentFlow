<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.6">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000; min-height: 14.0px}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s1">"use strict";</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s1">const KEY = "talentflow-project-data";</span></p>
<p class="p2"><span class="s1">const STAGES = ["New", "Screening", "Interview", "Offer", "Hired", "Rejected"];</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s1">const demo = {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>jobs: [</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>{id:"j1", title:"Product Designer", department:"Product", location:"Tashkent / Hybrid", type:"Full-time", priority:"High", status:"Open", skills:["Figma","User Research","Prototyping","Design Systems"], summary:"Design intuitive product experiences with product managers and engineers."},</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>{id:"j2", title:"Frontend Developer", department:"Engineering", location:"Remote", type:"Full-time", priority:"Urgent", status:"Open", skills:["JavaScript","React","CSS","Git"], summary:"Build responsive and accessible interfaces."},</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>{id:"j3", title:"Growth Marketing Intern", department:"Marketing", location:"Tashkent", type:"Internship", priority:"Normal", status:"Open", skills:["Analytics","Content","SEO","Communication"], summary:"Support marketing campaigns and reporting."}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>],</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>candidates: [</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>{id:"c1",name:"Nadia Karimova",email:"nadia@example.com",role:"Product Designer",skills:["Figma","User Research","Prototyping","Design Systems"],summary:"Designs B2B workflows and conducts usability sessions.",stage:"Interview",jobId:"j1"},</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>{id:"c2",name:"Daniel Lee",email:"daniel@example.com",role:"Frontend Developer",skills:["JavaScript","React","CSS","Git","Accessibility"],summary:"Builds responsive interfaces and accessible components.",stage:"Screening",jobId:"j2"},</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>{id:"c3",name:"Malika Saidova",email:"malika@example.com",role:"Marketing Assistant",skills:["Analytics","Content","Communication","Social Media"],summary:"Creates content and tracks campaign performance.",stage:"New",jobId:"j3"},</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>{id:"c4",name:"Omar Reyes",email:"omar@example.com",role:"UX Researcher",skills:["User Research","Interviews","Analytics","Prototyping"],summary:"Conducts qualitative interviews and synthesizes feedback.",stage:"Offer",jobId:"j1"}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>]</span></p>
<p class="p2"><span class="s1">};</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s1">let data;</span></p>
<p class="p2"><span class="s1">try {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const saved = JSON.parse(localStorage.getItem(KEY));</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>data = saved &amp;&amp; Array.isArray(saved.jobs) &amp;&amp; Array.isArray(saved.candidates)</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>? saved : structuredClone(demo);</span></p>
<p class="p2"><span class="s1">} catch {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>data = JSON.parse(JSON.stringify(demo));</span></p>
<p class="p2"><span class="s1">}</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s1">let page = "dashboard";</span></p>
<p class="p2"><span class="s1">let search = "";</span></p>
<p class="p2"><span class="s1">let jobFilter = "All";</span></p>
<p class="p2"><span class="s1">let stageFilter = "All";</span></p>
<p class="p2"><span class="s1">let matchJob = data.jobs[0]?.id || "";</span></p>
<p class="p2"><span class="s1">let matchCandidate = data.candidates[0]?.id || "";</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s1">const app = document.querySelector("#app");</span></p>
<p class="p2"><span class="s1">const $ = (s, root=document) =&gt; root.querySelector(s);</span></p>
<p class="p2"><span class="s1">const safe = value =&gt; String(value ?? "").replace(/[&amp;&lt;&gt;"']/g, c =&gt; ({</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>"&amp;":"&amp;amp;", "&lt;":"&amp;lt;", "&gt;":"&amp;gt;", '"':"&amp;quot;", "'":"&amp;#39;"</span></p>
<p class="p2"><span class="s1">}[c]));</span></p>
<p class="p2"><span class="s1">const norm = value =&gt; String(value ?? "").trim().toLowerCase();</span></p>
<p class="p2"><span class="s1">const skillsFrom = value =&gt; [...new Set(value.split(",").map(x=&gt;x.trim()).filter(Boolean))];</span></p>
<p class="p2"><span class="s1">const job = id =&gt; data.jobs.find(x=&gt;x.id===id);</span></p>
<p class="p2"><span class="s1">const candidate = id =&gt; data.candidates.find(x=&gt;x.id===id);</span></p>
<p class="p2"><span class="s1">const save = () =&gt; localStorage.setItem(KEY, JSON.stringify(data));</span></p>
<p class="p2"><span class="s1">const id = prefix =&gt; prefix + Date.now().toString(36) + Math.random().toString(36).slice(2,6);</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s1">function notify(message) {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const el = $("#toast");</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>el.textContent = message;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>el.style.display = "block";</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>clearTimeout(notify.timer);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>notify.timer = setTimeout(()=&gt;el.style.display="none", 2600);</span></p>
<p class="p2"><span class="s1">}</span></p>
<p class="p2"><span class="s1">function pill(status) {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const cls = {Open:"open",Paused:"paused",Closed:"closed",New:"new",</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>Screening:"screening",Interview:"interview",Offer:"offer",</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>Hired:"hired",Rejected:"rejected"}[status] || "new";</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>return `&lt;span class="pill ${cls}"&gt;${safe(status)}&lt;/span&gt;`;</span></p>
<p class="p2"><span class="s1">}</span></p>
<p class="p2"><span class="s1">function skillsTags(skills, type="") {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>return skills.length</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>? skills.map(s=&gt;`&lt;span class="tag ${type}"&gt;${safe(s)}&lt;/span&gt;`).join("")</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>: `&lt;span class="muted"&gt;None&lt;/span&gt;`;</span></p>
<p class="p2"><span class="s1">}</span></p>
<p class="p2"><span class="s1">function heading(title, description, action="") {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>return `&lt;div class="heading"&gt;&lt;div&gt;&lt;h1&gt;${title}&lt;/h1&gt;&lt;p&gt;${description}&lt;/p&gt;&lt;/div&gt;${action}&lt;/div&gt;`;</span></p>
<p class="p2"><span class="s1">}</span></p>
<p class="p2"><span class="s1">function button(label, action, cls="primary") {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>return `&lt;button class="btn ${cls}" data-action="${action}"&gt;${label}&lt;/button&gt;`;</span></p>
<p class="p2"><span class="s1">}</span></p>
<p class="p2"><span class="s1">function empty(message) {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>return `&lt;div class="empty"&gt;${message}&lt;/div&gt;`;</span></p>
<p class="p2"><span class="s1">}</span></p>
<p class="p2"><span class="s1">function fit(c, j) {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if (!c || !j || !j.skills.length) return 0;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const have = new Set(c.skills.map(norm));</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>return Math.round(j.skills.filter(s=&gt;have.has(norm(s))).length/j.skills.length*100);</span></p>
<p class="p2"><span class="s1">}</span></p>
<p class="p2"><span class="s1">function match(c,j) {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const have = new Set(c.skills.map(norm));</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>return {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>score:fit(c,j),</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>matched:j.skills.filter(s=&gt;have.has(norm(s))),</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>missing:j.skills.filter(s=&gt;!have.has(norm(s))),</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>extra:c.skills.filter(s=&gt;!j.skills.some(t=&gt;norm(t)===norm(s)))</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p2"><span class="s1">}</span></p>
<p class="p2"><span class="s1">function options(items, selected) {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>return items.map(x=&gt;`&lt;option value="${safe(x.id)}" ${x.id===selected?"selected":""}&gt;${safe(x.title || x.name)}&lt;/option&gt;`).join("");</span></p>
<p class="p2"><span class="s1">}</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s1">function dashboard() {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const open = data.jobs.filter(j=&gt;j.status==="Open").length;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const active = data.candidates.filter(c=&gt;!["Hired","Rejected"].includes(c.stage)).length;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const interviews = data.candidates.filter(c=&gt;c.stage==="Interview").length;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const hires = data.candidates.filter(c=&gt;c.stage==="Hired").length;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const stats = [</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>["Open positions",open,"Roles marked open"],</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>["Active candidates",active,"Not hired or rejected"],</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>["Interviews",interviews,"Candidates at interview stage"],</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>["Hires",hires,"Candidates marked hired"]</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>];</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const recent = data.jobs.slice().reverse().slice(0,5);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const top = data.candidates.slice().sort((a,b)=&gt;fit(b,job(b.jobId))-fit(a,job(a.jobId))).slice(0,4);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>return `${heading("Good morning, team 👋","Here's what's happening in your recruitment workspace.",</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>button("+ Create job","new-job")+" "+button("+ Add candidate","new-candidate","secondary"))}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>&lt;div class="stats"&gt;${stats.map((s,i)=&gt;`&lt;article class="stat"&gt;&lt;div class="stat-label"&gt;${s[0]}&lt;/div&gt;&lt;div class="stat-value"&gt;${s[1]}&lt;/div&gt;&lt;div class="stat-note"&gt;${s[2]}&lt;/div&gt;&lt;/article&gt;`).join("")}&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>&lt;div class="grid-two"&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;section class="panel"&gt;&lt;div class="panel-head"&gt;&lt;h2&gt;Open positions&lt;/h2&gt;&lt;button class="text-btn" data-page="jobs"&gt;View all →&lt;/button&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>${recent.length?`&lt;div class="table-wrap"&gt;&lt;table&gt;&lt;thead&gt;&lt;tr&gt;&lt;th&gt;POSITION&lt;/th&gt;&lt;th&gt;STATUS&lt;/th&gt;&lt;th&gt;PEOPLE&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;&lt;tbody&gt;${recent.map(j=&gt;`&lt;tr&gt;&lt;td&gt;${safe(j.title)}&lt;small style="display:block;color:#999;margin-top:4px"&gt;${safe(j.department)}&lt;/small&gt;&lt;/td&gt;&lt;td&gt;${pill(j.status)}&lt;/td&gt;&lt;td&gt;${data.candidates.filter(c=&gt;c.jobId===j.id).length}&lt;/td&gt;&lt;/tr&gt;`).join("")}&lt;/tbody&gt;&lt;/table&gt;&lt;/div&gt;`:empty("No jobs yet. Create a job to get started.")}&lt;/section&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;section class="panel"&gt;&lt;div class="panel-head"&gt;&lt;h2&gt;Strongest skill matches&lt;/h2&gt;&lt;button class="text-btn" data-page="matching"&gt;Compare →&lt;/button&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>${top.length?top.map(c=&gt;`&lt;div class="candidate-row"&gt;&lt;div class="avatar"&gt;${safe(c.name.split(" ").map(x=&gt;x[0]).join("").slice(0,2))}&lt;/div&gt;&lt;div class="candidate-details"&gt;&lt;strong&gt;${safe(c.name)}&lt;/strong&gt;&lt;small&gt;${safe(job(c.jobId)?.title || "Unassigned")}&lt;/small&gt;&lt;/div&gt;&lt;strong&gt;${fit(c,job(c.jobId))}%&lt;/strong&gt;&lt;/div&gt;`).join(""):empty("Add a candidate to see comparisons.")}&lt;/section&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>&lt;/div&gt;`;</span></p>
<p class="p2"><span class="s1">}</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s1">function jobsPage() {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const q=norm(search);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const list=data.jobs.filter(j=&gt;(jobFilter==="All"||j.status===jobFilter) &amp;&amp;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>[j.title,j.department,j.location,...j.skills].some(v=&gt;norm(v).includes(q)));</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>return `${heading("Jobs","Create roles, define requirements, and manage open positions.",button("+ Create job","new-job"))}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>&lt;div class="filter-row"&gt;&lt;input id="search-box" value="${safe(search)}" placeholder="Search jobs or skills…"&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>&lt;select id="job-filter"&gt;${["All","Open","Paused","Closed"].map(s=&gt;`&lt;option ${s===jobFilter?"selected":""}&gt;${s}&lt;/option&gt;`).join("")}&lt;/select&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>${list.length?`&lt;div class="cards"&gt;${list.map(j=&gt;`&lt;article class="job-card"&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;div class="panel-head"&gt;&lt;div&gt;&lt;h3&gt;${safe(j.title)}&lt;/h3&gt;&lt;div class="job-meta"&gt;${safe(j.department)} · ${safe(j.location)}&lt;/div&gt;&lt;/div&gt;${pill(j.status)}&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;p&gt;${safe(j.summary || "No summary provided.")}&lt;/p&gt;&lt;div class="skill-tags"&gt;${skillsTags(j.skills)}&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;div class="card-foot"&gt;&lt;small&gt;${data.candidates.filter(c=&gt;c.jobId===j.id).length} candidate(s) · ${safe(j.priority)} priority&lt;/small&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;button class="text-btn" data-action="match-job" data-id="${j.id}"&gt;Find matches →&lt;/button&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;div class="card-foot"&gt;&lt;button class="text-btn" data-action="toggle-job" data-id="${j.id}"&gt;Change status&lt;/button&gt;&lt;button class="text-btn" data-action="delete-job" data-id="${j.id}"&gt;Delete&lt;/button&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>&lt;/article&gt;`).join("")}&lt;/div&gt;`:empty("No matching jobs. Try a different search or create a role.")}`;</span></p>
<p class="p2"><span class="s1">}</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s1">function candidatesPage() {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const q=norm(search);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const list=data.candidates.filter(c=&gt;(stageFilter==="All"||c.stage===stageFilter) &amp;&amp;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>[c.name,c.email,c.role,...c.skills].some(v=&gt;norm(v).includes(q)));</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>return `${heading("Candidates","Manage candidate profiles and review their listed skills.",button("+ Add candidate","new-candidate"))}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>&lt;div class="filter-row"&gt;&lt;input id="search-box" value="${safe(search)}" placeholder="Search names, roles, emails, skills…"&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>&lt;select id="stage-filter"&gt;${["All",...STAGES].map(s=&gt;`&lt;option ${s===stageFilter?"selected":""}&gt;${s}&lt;/option&gt;`).join("")}&lt;/select&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>&lt;section class="panel"&gt;&lt;div class="table-wrap"&gt;${list.length?`&lt;table&gt;&lt;thead&gt;&lt;tr&gt;&lt;th&gt;CANDIDATE&lt;/th&gt;&lt;th&gt;ROLE&lt;/th&gt;&lt;th&gt;SKILLS&lt;/th&gt;&lt;th&gt;STAGE&lt;/th&gt;&lt;th&gt;FIT&lt;/th&gt;&lt;th&gt;&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;&lt;tbody&gt;${list.map(c=&gt;`&lt;tr&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;td&gt;${safe(c.name)}&lt;small style="display:block;color:#999;margin-top:4px"&gt;${safe(c.email)}&lt;/small&gt;&lt;/td&gt;&lt;td&gt;${safe(job(c.jobId)?.title||"Unassigned")}&lt;/td&gt;&lt;td&gt;${c.skills.length} listed&lt;/td&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;td&gt;&lt;select data-action="stage" data-id="${c.id}"&gt;${STAGES.map(s=&gt;`&lt;option ${s===c.stage?"selected":""}&gt;${s}&lt;/option&gt;`).join("")}&lt;/select&gt;&lt;/td&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;td&gt;&lt;strong&gt;${fit(c,job(c.jobId))}%&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;&lt;button class="text-btn" data-action="match-candidate" data-id="${c.id}"&gt;Compare →&lt;/button&gt;&lt;/td&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>&lt;/tr&gt;`).join("")}&lt;/tbody&gt;&lt;/table&gt;`:empty("No matching candidates. Add a profile to begin.")}&lt;/div&gt;&lt;/section&gt;`;</span></p>
<p class="p2"><span class="s1">}</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s1">function matchingPage() {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if (!job(matchJob)) matchJob=data.jobs[0]?.id||"";</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if (!candidate(matchCandidate)) matchCandidate=data.candidates[0]?.id||"";</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const j=job(matchJob), c=candidate(matchCandidate);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>let result="";</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if (j&amp;&amp;c) {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>const m=match(c,j);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>const questions=[];</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>if(m.missing.length) questions.push(`Can you describe a project where you used ${m.missing[0]}?`);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>if(m.matched.length) questions.push(`Tell us about a challenge you solved using ${m.matched[0]}.`);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>questions.push(`How would you approach your first 30 days as our ${j.title}?`);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>questions.push("What evidence or work sample best demonstrates your relevant skills?");</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>result=`&lt;div class="score-row"&gt;&lt;div class="score"&gt;${m.score}%&lt;/div&gt;&lt;div&gt;&lt;h2&gt;${m.score&gt;=75?"Strong skill overlap":m.score&gt;=40?"Partial skill overlap":"Limited skill overlap"}&lt;/h2&gt;&lt;p class="muted-text"&gt;${m.matched.length} of ${j.skills.length} required skill tags match exactly.&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;div class="columns"&gt;&lt;div&gt;&lt;h3&gt;✓ Matched skills (${m.matched.length})&lt;/h3&gt;&lt;div class="skill-tags"&gt;${skillsTags(m.matched,"match")}&lt;/div&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;div&gt;&lt;h3&gt;! Not confirmed (${m.missing.length})&lt;/h3&gt;&lt;div class="skill-tags"&gt;${skillsTags(m.missing,"missing")}&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;div class="explanation"&gt;&lt;strong&gt;Match explanation&lt;/strong&gt;&lt;br&gt;${safe(c.name)} matches ${m.matched.length} of ${j.skills.length} required skill tags for ${safe(j.title)}. The profile lists ${m.matched.join(", ")||"no exact matching skills"}. It does not confirm ${m.missing.join(", ")||"any missing requirements"}. This is a checklist, not a prediction of job performance. A missing tag does not mean the person lacks the skill; verify through discussion or a work sample.</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;br&gt;&lt;br&gt;&lt;strong&gt;Suggested interview questions&lt;/strong&gt;&lt;ol&gt;${questions.slice(0,4).map(q=&gt;`&lt;li&gt;${safe(q)}&lt;/li&gt;`).join("")}&lt;/ol&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;div class="actions"&gt;&lt;button class="btn secondary" data-action="save-comparison"&gt;Save comparison&lt;/button&gt;&lt;/div&gt;`;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>} else result=empty("Create at least one job and one candidate to compare skills.");</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>return `${heading("AI Matching","Transparent skill-tag comparison with a template explanation.",'&lt;span class="pill new"&gt;Demo mode&lt;/span&gt;')}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>&lt;div class="match-grid"&gt;&lt;section class="card"&gt;&lt;h2&gt;Compare profiles&lt;/h2&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;label class="field"&gt;Job opening&lt;select id="match-job"&gt;${options(data.jobs.map(j=&gt;({id:j.id,title:j.title})),matchJob)}&lt;/select&gt;&lt;/label&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;label class="field"&gt;Candidate&lt;select id="match-candidate"&gt;${options(data.candidates.map(c=&gt;({id:c.id,title:c.name})),matchCandidate)}&lt;/select&gt;&lt;/label&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>${button("Compare skills ↗","run-match")}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;p class="muted-text" style="margin-top:20px"&gt;Matching uses exact, case-insensitive skill names. No résumé parsing or external AI service is connected.&lt;/p&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>&lt;/section&gt;&lt;section class="card"&gt;${result}&lt;/section&gt;&lt;/div&gt;`;</span></p>
<p class="p2"><span class="s1">}</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s1">function pipelinePage() {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>return `${heading("Hiring Pipeline","Move candidates between stages. Changes are saved automatically.",button("+ Add candidate","new-candidate"))}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>&lt;div class="pipeline"&gt;${STAGES.map(stage=&gt;{</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>const people=data.candidates.filter(c=&gt;c.stage===stage);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>return `&lt;section class="stage"&gt;&lt;div class="stage-title"&gt;${stage}&lt;span&gt;${people.length}&lt;/span&gt;&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">        </span>${people.map(c=&gt;`&lt;article class="person-card"&gt;&lt;strong&gt;${safe(c.name)}&lt;/strong&gt;&lt;small&gt;${safe(c.role)}&lt;br&gt;${safe(job(c.jobId)?.title||"Unassigned")}&lt;/small&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">          </span>&lt;select data-action="stage" data-id="${c.id}"&gt;${STAGES.map(s=&gt;`&lt;option ${s===c.stage?"selected":""}&gt;${s}&lt;/option&gt;`).join("")}&lt;/select&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">          </span>&lt;button class="text-btn" data-action="match-candidate" data-id="${c.id}"&gt;Compare skills →&lt;/button&gt;&lt;/article&gt;`).join("")||'&lt;p class="muted-text"&gt;No candidates&lt;/p&gt;'}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;/section&gt;`;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>}).join("")}&lt;/div&gt;`;</span></p>
<p class="p2"><span class="s1">}</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s1">function insightsPage() {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const total=data.candidates.length;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const average=total?Math.round(data.candidates.reduce((sum,c)=&gt;sum+fit(c,job(c.jobId)),0)/total):0;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>return `${heading("Insights","A snapshot of activity based on records stored in this browser.")}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>&lt;div class="stats"&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;article class="stat"&gt;&lt;div class="stat-label"&gt;Average skill overlap&lt;/div&gt;&lt;div class="stat-value"&gt;${average}%&lt;/div&gt;&lt;div class="stat-note"&gt;Exact skill tags&lt;/div&gt;&lt;/article&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;article class="stat"&gt;&lt;div class="stat-label"&gt;Candidates&lt;/div&gt;&lt;div class="stat-value"&gt;${total}&lt;/div&gt;&lt;div class="stat-note"&gt;Profiles in workspace&lt;/div&gt;&lt;/article&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;article class="stat"&gt;&lt;div class="stat-label"&gt;Open jobs&lt;/div&gt;&lt;div class="stat-value"&gt;${data.jobs.filter(j=&gt;j.status==="Open").length}&lt;/div&gt;&lt;div class="stat-note"&gt;Roles marked open&lt;/div&gt;&lt;/article&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>&lt;article class="stat"&gt;&lt;div class="stat-label"&gt;Hires&lt;/div&gt;&lt;div class="stat-value"&gt;${data.candidates.filter(c=&gt;c.stage==="Hired").length}&lt;/div&gt;&lt;div class="stat-note"&gt;Candidates at Hired stage&lt;/div&gt;&lt;/article&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>&lt;div class="grid-two"&gt;&lt;section class="panel"&gt;&lt;h2&gt;Pipeline distribution&lt;/h2&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>${STAGES.map(s=&gt;{const n=data.candidates.filter(c=&gt;c.stage===s).length;return `&lt;div class="metric"&gt;&lt;label&gt;${s}&lt;/label&gt;&lt;div class="bar"&gt;&lt;span style="width:${total?n/total*100:0}%"&gt;&lt;/span&gt;&lt;/div&gt;&lt;strong&gt;${n}&lt;/strong&gt;&lt;/div&gt;`}).join("")}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>&lt;/section&gt;&lt;section class="panel"&gt;&lt;h2&gt;Candidates per job&lt;/h2&gt;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>${data.jobs.map(j=&gt;`&lt;div class="metric"&gt;&lt;label&gt;${safe(j.title)}&lt;/label&gt;&lt;div class="bar"&gt;&lt;span style="width:${data.candidates.length?data.candidates.filter(c=&gt;c.jobId===j.id).length/data.candidates.length*100:0}%"&gt;&lt;/span&gt;&lt;/div&gt;&lt;strong&gt;${data.candidates.filter(c=&gt;c.jobId===j.id).length}&lt;/strong&gt;&lt;/div&gt;`).join("")||empty("Create a job to see metrics.")}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>&lt;/section&gt;&lt;/div&gt;`;</span></p>
<p class="p2"><span class="s1">}</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s1">function render() {</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>$("#page-name").textContent=({dashboard:"Dashboard",jobs:"Jobs",candidates:"Candidates",matching:"AI Matching",pipeline:"Hiring Pipeline",insights:"Insights"})[page];</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>$("#job-count").textContent=data.jobs.filter(j=&gt;j.status==="Open").length;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>$("#candidate-count").textContent=data.candidates.length;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>document.querySelectorAll("[data-page]").forEach(b=&gt;b.classList.toggle("active",b.dataset.page===page));</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>app.innerHTML=({dashboard,jobs:jobsPage,candidates:candidatesPage,matching:matchingPage,pipeline:pipelinePage,insights:insightsPage})[page]();</span></p>
<p class="p2"><span class="s1">}</span></p>
<p class="p2"><span class="s1">function go(next) { page=next; search=""; $("#global-search").value=""; render(); window.scrollTo(0,0); }</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s1">document.querySelector("#navigation").addEventListener("click",e=&gt;{</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const b=e.target.closest("[data-page]"); if(b) go(b.dataset.page);</span></p>
<p class="p2"><span class="s1">});</span></p>
<p class="p2"><span class="s1">document.querySelector(".brand").addEventListener("click",e=&gt;{e.preventDefault();go("dashboard");});</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s1">app.addEventListener("input",e=&gt;{</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(e.target.id==="search-box"){</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>const pos=e.target.selectionStart; search=e.target.value; render();</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>const box=$("#search-box"); if(box){box.focus();box.setSelectionRange(pos,pos);}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p2"><span class="s1">});</span></p>
<p class="p2"><span class="s1">app.addEventListener("change",e=&gt;{</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(e.target.id==="job-filter"){jobFilter=e.target.value;render();}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(e.target.id==="stage-filter"){stageFilter=e.target.value;render();}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(e.target.id==="match-job"){matchJob=e.target.value;render();}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(e.target.id==="match-candidate"){matchCandidate=e.target.value;render();}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(e.target.dataset.action==="stage"){</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>const c=candidate(e.target.dataset.id);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>if(c){c.stage=e.target.value;save();render();notify(`${c.name} moved to ${c.stage}.`);}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p2"><span class="s1">});</span></p>
<p class="p2"><span class="s1">app.addEventListener("click",e=&gt;{</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const pageButton=e.target.closest("[data-page]");</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(pageButton &amp;&amp; !pageButton.closest("#navigation")){go(pageButton.dataset.page);return;}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const b=e.target.closest("[data-action]"); if(!b)return;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const act=b.dataset.action, target=b.dataset.id;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(act==="new-job") $("#job-dialog").showModal();</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(act==="new-candidate") $("#candidate-dialog").showModal();</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(act==="match-job"){matchJob=target;go("matching");}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(act==="match-candidate"){matchCandidate=target;matchJob=candidate(target)?.jobId||matchJob;go("matching");}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(act==="run-match"){render();notify("Skill comparison updated.");}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(act==="save-comparison"){notify("Comparison displayed. Save it by keeping a local browser record.");}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(act==="toggle-job"){</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>const j=job(target);if(j){j.status=j.status==="Open"?"Paused":j.status==="Paused"?"Closed":"Open";save();render();notify("Job status updated.");}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(act==="delete-job"){</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>const j=job(target);if(j&amp;&amp;confirm(`Delete ${j.title}? Candidates assigned to it will become unassigned.`)){</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>data.jobs=data.jobs.filter(x=&gt;x.id!==target);</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>data.candidates.forEach(c=&gt;{if(c.jobId===target)c.jobId="";});</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">      </span>save();render();notify("Job deleted.");</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p2"><span class="s1">});</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s1">$("#job-form").addEventListener("submit",e=&gt;{</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>e.preventDefault();</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const f=new FormData(e.currentTarget), skills=skillsFrom(String(f.get("skills")||""));</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(!skills.length){notify("Add at least one skill.");return;}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const j={id:id("j"),title:String(f.get("title")).trim(),department:String(f.get("department")).trim(),</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>location:String(f.get("location")).trim(),type:f.get("type"),priority:f.get("priority"),</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>skills,summary:String(f.get("summary")||"").trim(),status:"Open"};</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>data.jobs.unshift(j);matchJob=j.id;save();e.currentTarget.reset();$("#job-dialog").close();go("jobs");notify("Job created.");</span></p>
<p class="p2"><span class="s1">});</span></p>
<p class="p2"><span class="s1">$("#candidate-form").addEventListener("submit",e=&gt;{</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>e.preventDefault();</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const f=new FormData(e.currentTarget), skills=skillsFrom(String(f.get("skills")||""));</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(!skills.length){notify("Add at least one skill.");return;}</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const c={id:id("c"),name:String(f.get("name")).trim(),email:String(f.get("email")).trim(),</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>role:String(f.get("role")).trim(),skills,summary:String(f.get("summary")||"").trim(),</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>stage:"New",jobId:data.jobs.find(j=&gt;j.status==="Open")?.id||""};</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>data.candidates.unshift(c);matchCandidate=c.id;matchJob=c.jobId||matchJob;save();</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>e.currentTarget.reset();$("#candidate-dialog").close();go("candidates");notify("Candidate added.");</span></p>
<p class="p2"><span class="s1">});</span></p>
<p class="p2"><span class="s1">document.querySelectorAll("[data-close]").forEach(b=&gt;b.addEventListener("click",()=&gt;b.closest("dialog").close()));</span></p>
<p class="p2"><span class="s1">document.querySelectorAll("dialog").forEach(d=&gt;d.addEventListener("click",e=&gt;{if(e.target===d)d.close();}));</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s1">$("#global-search").addEventListener("input",e=&gt;{</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>search=e.target.value;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(page!=="jobs"&amp;&amp;page!=="candidates")page="jobs";</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>render();</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>const box=$("#search-box");</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(box){box.focus();box.setSelectionRange(box.value.length,box.value.length);}</span></p>
<p class="p2"><span class="s1">});</span></p>
<p class="p2"><span class="s1">$("#reset-data").addEventListener("click",()=&gt;{</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if(confirm("Reset all data to the original demo examples?")){</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>data=JSON.parse(JSON.stringify(demo));save();jobFilter="All";stageFilter="All";</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>matchJob=data.jobs[0]?.id||"";matchCandidate=data.candidates[0]?.id||"";go("dashboard");notify("Demo data reset.");</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>}</span></p>
<p class="p2"><span class="s1">});</span></p>
<p class="p2"><span class="s1">document.addEventListener("keydown",e=&gt;{</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>if((e.ctrlKey||e.metaKey)&amp;&amp;e.key.toLowerCase()==="k"){e.preventDefault();$("#global-search").focus();}</span></p>
<p class="p2"><span class="s1">});</span></p>
<p class="p2"><span class="s1">render();</span></p>
</body>
</html>
