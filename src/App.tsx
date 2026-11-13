import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Award, Activity, Check, CheckCircle2, ChevronRight, Dumbbell, Flame, HeartPulse, Instagram, Medal, MessageCircle, ShieldCheck, Target, Trophy, X, Zap } from 'lucide-react'
import { Analytics } from '@vercel/analytics/react'
import { BRAND } from './config'
import Navbar from './components/Navbar'
import Logo from './components/Logo'
import SectionHeading from './components/SectionHeading'
import Contact from './components/Contact'

const photo = (name:string) => `/images/${name}`
const benefits = [
  {icon:Dumbbell,title:'PHYSICAL FITNESS',copy:'Build strength, stamina, flexibility and coordination.'},
  {icon:Target,title:'FOCUS & CONCENTRATION',copy:'Develop attention, patience and the ability to follow instructions.'},
  {icon:Flame,title:'CONFIDENCE & RESILIENCE',copy:'Encourage children to overcome challenges and believe in their abilities.'},
  {icon:Medal,title:'DISCIPLINE & RESPECT',copy:'Develop consistency, self-control, perseverance and respect for others.'},
]
const components = [
  {title:'TAEKWONDO',text:'Build the right foundation through essential techniques and movement.',items:['Introduction to Taekwondo','Stances, movements and techniques','Kicks and hand techniques','Balance, posture and coordination'],icon:Zap,featured:false},
  {title:'SELF-DEFENCE TRAINING',text:'Learn practical awareness and responsible defensive skills.',items:['Self-defence awareness','Defensive movements','Distance and personal boundaries','Prevention and responsible responses'],icon:ShieldCheck,featured:false},
  {title:'STRENGTH & PHYSICAL FITNESS',text:'Develop overall physical ability through structured movement.',items:['Progressive strength development','Stamina and endurance','Flexibility and mobility','Balance, agility and coordination'],icon:Activity,featured:false},
  {title:'ACTIVE WELLNESS',text:'Build positive habits that extend beyond the training floor.',items:['Regular physical activity','Healthy movement habits','Consistency and discipline','An active lifestyle beyond screens'],icon:HeartPulse,featured:false},
  {title:'BELT PROGRESSION & COMPETITIONS',text:'Work towards milestones as skills and readiness develop.',items:['Progressive skill development','Authorised belt examinations','Suitable school-level competitions','Preparation based on student readiness'],icon:Trophy,featured:true},
]
const partnerBenefits = ['Convenient training within the residential premises','An engaging extracurricular activity for resident children','Regular physical activity beyond screen-based entertainment','Dedicated and structured coaching','Beginner-friendly training','Opportunities for belt progression and suitable competitions','Parent-friendly scheduling and communication','A positive activity that encourages community participation']
const safetyItems = ['Beginner-friendly instruction','Proper warm-up and cool-down routines','Technique before intensity','Safe and suitable training environments','Parent consent and emergency contact information','Appropriate supervision during sessions','No premature or uncontrolled sparring']

function App() {
  const [lightbox,setLightbox] = useState<string|null>(null)
  const reveal = {hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.55}}}
  return <div id="top" className="site-shell">
    <Navbar />
    <main>
      <section className="hero section-pad">
        <div className="hero-grid" />
        <motion.div className="hero-copy" initial="hidden" animate="show" variants={{show:{transition:{staggerChildren:.12}}}}>
          <motion.div className="eyebrow" variants={reveal}><span/>INDEPENDENT TAEKWONDO COACHING · HYDERABAD</motion.div>
          <motion.h1 variants={reveal}>BRING<br/>TAEKWONDO<br/><i>TO YOUR</i><br/>COMMUNITY<span className="orange-dot">.</span></motion.h1>
          <motion.div className="hero-tagline" variants={reveal}><span/>BUILD STRENGTH. <b>BUILD CONFIDENCE.</b></motion.div>
          <motion.p variants={reveal}>Introduce structured Taekwondo coaching to your residential community and give children an opportunity to grow stronger, more confident and disciplined through martial arts.</motion.p>
          <motion.div className="hero-actions" variants={reveal}><a className="button button-orange" href="#contact">Explore community partnership <ArrowUpRight size={17}/></a><a className="button button-ghost" href="#coach">Meet your coach <ArrowRight size={16}/></a></motion.div>
          <motion.div className="hero-proof" variants={reveal}><span className="proof-mark"><Award size={18}/></span><span><b>1ST DAN BLACK BELT · NATIONAL MEDALLIST</b><small>Structured Taekwondo coaching</small></span></motion.div>
        </motion.div>
        <motion.div className="hero-visual" initial={{opacity:0,x:35}} animate={{opacity:1,x:0}} transition={{duration:.8,delay:.2}}>
          <div className="hero-image-frame"><img src={photo('hero-reference.jpg')} alt="Taekwondo athlete in a white uniform"/><div className="hero-image-shade"/></div>
          <div className="hero-float"><span><Award size={19}/></span><b>NATIONAL<br/>MEDALLIST COACH</b></div>
          <div className="hero-vertical">RUDRA TAEKWONDO · HYDERABAD</div>
        </motion.div>
        <a href="#why" className="scroll-cue"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
      </section>

      <section id="why" className="section-pad why-section">
        <div className="why-top"><SectionHeading eyebrow="WHY TAEKWONDO" title={<>MORE THAN<br/><em>JUST A SPORT.</em></>} copy="Childhood is the foundation for lifelong habits. Taekwondo helps children develop both physically and mentally through consistent training."/><div className="why-photo"><img src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1100&q=85" alt="Children practising martial arts in a training space"/><span>COMMUNITY TRAINING · ACROSS HYDERABAD</span></div></div>
        <div className="benefit-grid">{benefits.map((item,i)=><motion.article className="benefit-card" key={item.title} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}} transition={{delay:i*.06}}><div className="benefit-icon"><item.icon size={22}/></div><span className="card-number">0{i+1}</span><h3>{item.title}</h3><p>{item.copy}</p></motion.article>)}</div>
      </section>

      <section id="community" className="section-pad community-section">
        <SectionHeading eyebrow="THE RUDRA COMMUNITY PROGRAM" title={<>YOUR COMMUNITY.<br/>YOUR TRAINING SPACE.<br/><em>THEIR GROWTH.</em></>} copy="RUDRA TAEKWONDO brings structured martial arts training closer to home by conducting dedicated coaching batches within residential communities."/>
        <div className="community-layout"><div className="community-image"><img src={photo('kids.jfif')} alt="Children training in a Taekwondo class"/><div className="image-label"><span>01 / TRAINING SPACE</span><b>MADE FOR<br/>MOVEMENT.</b></div></div><div className="steps-list">{[['01','COMMUNITY PARTNERSHIP','We coordinate with the apartment association or community management to establish a suitable training arrangement.'],['02','STRUCTURED TRAINING','We organise regular, suitable coaching sessions with progressive training and individual attention.'],['03','CONSISTENT DEVELOPMENT','Children learn fundamentals, improve their techniques and develop their physical abilities through regular practice.']].map(([n,t,c])=><div className="step" key={n}><span className="step-no">{n}</span><div><h3>{t}</h3><p>{c}</p></div><ChevronRight size={18}/></div>)}</div></div>
        <div className="community-note"><span className="note-icon"><Zap size={18}/></span><p><b>WE BRING THE COACH, CURRICULUM AND PROGRAM.</b><br/>Your community provides a suitable training space and helps coordinate with interested residents.</p><a href="#contact">Discuss a partnership <ArrowUpRight size={16}/></a></div>
      </section>

      <section id="training" className="section-pad training-section">
        <SectionHeading eyebrow="OUR TRAINING PROGRAM" title={<>EVERY CHILD STARTS<br/>WITH THE RIGHT <em>FOUNDATION.</em></>} copy="One structured, beginner-friendly programme. Every student starts with fundamentals and progresses according to individual development, readiness and performance."/>
        <div className="training-grid">{components.map((item,i)=><motion.article className={`training-card ${item.featured?'featured':''}`} key={item.title} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.07}}><div className="training-card-top"><span className="training-icon"><item.icon size={21}/></span><span className="training-num">0{i+1}</span>{item.featured&&<span className="signature">SIGNATURE</span>}</div><h3>{item.title}</h3><p>{item.text}</p><ul>{item.items.map(x=><li key={x}><Check size={14}/>{x}</li>)}</ul></motion.article>)}</div>
        <p className="training-footnote">Belt examinations and certification are conducted through the applicable authorised Taekwondo structure and remain subject to eligibility and examination requirements. Competition participation depends on student readiness and selection.</p>
      </section>

      <section id="coach" className="section-pad coach-section">
        <div className="coach-photo-wrap"><img src={photo('coach-reference.jpg')} alt="Taekwondo black belt coach in a ready stance"/><div className="coach-years"><b>9</b><span>YEARS OF<br/>TAEKWONDO</span></div><div className="photo-outline"/></div>
        <div className="coach-content"><SectionHeading eyebrow="MEET YOUR COACH" title={<>LEARN FROM<br/>EXPERIENCE.<br/><em>TRAIN WITH PURPOSE.</em></>} copy=""/><div className="coach-name">{BRAND.coach}</div><div className="coach-role">1ST DAN TAEKWONDO BLACK BELT <span/> NATIONAL MEDALLIST <span/> COACH</div>
          <div className="credential-grid">{['9 years of Taekwondo experience','1st Dan Black Belt','National Medallist','State Gold Medallist','Represented India at a G1 International Taekwondo event','Active Taekwondo Coach and Referee','National Referee affiliation with Taekwondo Federation of India'].map(x=><div key={x}><CheckCircle2 size={16}/>{x}</div>)}</div>
          <blockquote>“Taekwondo has played an important role in shaping my fitness, confidence and resilience. I believe every child deserves the opportunity to experience the benefits of sports. Through RUDRA, my goal is to bring structured martial arts training into residential communities and help children develop skills that extend beyond the training floor.”</blockquote>
        </div>
      </section>

      <section id="achievements" className="section-pad achievements-section">
        <SectionHeading eyebrow="ACHIEVEMENTS & RECOGNITION" title={<>THE JOURNEY. THE ACHIEVEMENTS.<br/><em>THE RECOGNITION.</em></>} copy="Every achievement represents years of dedication, discipline and commitment to Taekwondo."/>
        <div className="achievement-grid">
          <button className="press-feature" onClick={()=>setLightbox(photo('np.jpg'))}><div className="press-top"><span><Award size={15}/> PRESS FEATURE</span><small>PRINT MEDIA</small></div><img src={photo('np.jpg')} alt="Newspaper clipping featuring a Taekwondo athlete"/><div className="press-bottom"><b>NEWSPAPER RECOGNITION</b><span>Featured in print media for achievements and contributions in Taekwondo.</span><i>VIEW IMAGE <ArrowUpRight size={14}/></i></div></button>
          <a className="social-feature" href={BRAND.studentTribeReel} target="_blank" rel="noreferrer"><div className="social-top"><span className="st-mark">ST</span><div><b>Student Tribe</b><small>FEATURED · INSTAGRAM REEL</small></div><Instagram size={19}/></div><div className="social-preview"><img src={photo('social-placeholder.jpg')} alt="Student Tribe Instagram Reel thumbnail"/><span className="play-button">▶</span></div><div className="social-bottom"><b>STUDENT TRIBE FEATURE</b><span>An opportunity to share a Taekwondo journey and inspire fellow students to pursue sports, fitness and discipline.</span><i>VIEW INSTAGRAM FEATURE <ArrowUpRight size={14}/></i></div></a>
          <div className="g1-achievement"><span className="eyebrow"><span/>INTERNATIONAL ACHIEVEMENT</span><b>REPRESENTED INDIA AT A G1 INTERNATIONAL TAEKWONDO EVENT</b></div>
          <button className="certificate-feature" onClick={()=>setLightbox(photo('certi.jpeg'))}><img className="certificate-image" src={photo('certi.jpeg')} alt="Kukkiwon first Dan Taekwondo certificate for V Yeshwanth Goud"/><div className="certificate-caption"><b>BLACK BELT CERTIFICATION</b><span>1st Dan Black Belt — a milestone reflecting years of commitment, training and dedication.</span></div></button>
        </div>
      </section>

      <section id="partner" className="section-pad partner-section">
        <SectionHeading eyebrow="WHY PARTNER WITH RUDRA?" title={<>A VALUABLE ADDITION<br/>TO <em>YOUR COMMUNITY.</em></>} copy="We are an independent Taekwondo coaching brand offering structured training programmes for children within residential communities across Hyderabad."/>
        <div className="partner-benefit-grid">{partnerBenefits.map((x,i)=><div className="partner-benefit" key={x}><span>0{i+1}</span><Check size={15}/>{x}</div>)}</div>
        <div className="what-we-do"><div><span className="eyebrow"><span/>WHAT WE BRING</span><h3>THE PROGRAM.<br/><em>THE COACHING.</em></h3><ul>{['Coaching and session planning','Structured training curriculum','Batch coordination','Student progress tracking','Parent communication','Safety-conscious training practices','Guidance for belt examinations and suitable competitions'].map(x=><li key={x}><Check size={14}/>{x}</li>)}</ul></div><div className="community-asks"><span className="eyebrow"><span/>WHAT WE NEED FROM YOUR COMMUNITY</span><h3>A SPACE TO<br/><em>GET STARTED.</em></h3><ul>{['Access to a suitable multipurpose hall or safe training area','A mutually agreed weekly schedule','Permission and support from the association or management','Assistance communicating the programme to interested residents'].map(x=><li key={x}><Check size={14}/>{x}</li>)}</ul></div></div>
      </section>

      <section id="safety" className="section-pad safety-section"><div className="safety-copy"><SectionHeading eyebrow="SAFETY & RESPONSIBLE COACHING" title={<>CHILDREN'S SAFETY<br/><em>COMES FIRST.</em></>} copy="A positive training environment begins with responsible instruction, suitable activities and clear communication with parents."/><a href="#contact" className="text-link">Talk to us about safety <ArrowUpRight size={16}/></a></div><div className="safety-list">{safetyItems.map((x,i)=><div key={x}><span>0{i+1}</span><ShieldCheck size={18}/><b>{x}</b></div>)}</div></section>

      <section className="final-cta"><div className="cta-grid"/><div className="cta-content"><span className="eyebrow">RUDRA TAEKWONDO · HYDERABAD</span><h2>LET'S BUILD A<br/><em>STRONGER</em><br/>COMMUNITY<span>.</span></h2><p>Give the children in your residential community an opportunity to discover the strength, confidence and discipline that Taekwondo can develop.</p><div className="cta-actions"><a href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent('Interested in building community partnership')}`} target="_blank" rel="noreferrer" className="button button-dark">Start a community partnership <ArrowUpRight size={17}/></a><a href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent('Request a demo')}`} target="_blank" rel="noreferrer" className="cta-demo">REQUEST AN INTRODUCTORY DEMO <ArrowRight size={16}/></a></div></div><div className="cta-watermark">R</div></section>

      <Contact />
    </main>
    <footer className="footer"><div className="footer-main"><div className="footer-brand"><Logo/><p>More than martial arts. A stronger, more confident generation.</p><span>BUILD STRENGTH. BUILD CONFIDENCE.</span></div><div className="footer-col"><b>EXPLORE</b><a href="#why">Why Taekwondo</a><a href="#community">Community Program</a><a href="#training">Training Program</a><a href="#coach">Meet the Coach</a></div><div className="footer-col"><b>DISCOVER</b><a href="#achievements">Achievements</a><a href="#partner">Partnership</a><a href="#safety">Safety</a><a href="#contact">Contact</a></div><div className="footer-col"><b>GET IN TOUCH</b><a href={`tel:${BRAND.phoneDisplay}`}>{BRAND.phoneDisplay}</a><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a><a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={13}/></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} RUDRA TAEKWONDO. ALL RIGHTS RESERVED.</span><span>INDEPENDENT COACHING · ACROSS HYDERABAD</span><a href="#top">BACK TO TOP ↑</a></div></footer>

    <AnimatePresence>{lightbox&&<motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setLightbox(null)}><button aria-label="Close image" className="lightbox-close" onClick={()=>setLightbox(null)}><X/></button><motion.img src={lightbox} alt="Enlarged achievement image" initial={{scale:.94}} animate={{scale:1}} onClick={e=>e.stopPropagation()}/></motion.div>}</AnimatePresence>
    <a className="floating-whatsapp" href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Contact on WhatsApp"><MessageCircleIcon/></a>
    <Analytics />
  </div>
}
function MessageCircleIcon(){return <MessageCircle size={24} strokeWidth={2.4}/>}
export default App
