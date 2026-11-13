import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpRight, CheckCircle2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { BRAND } from '../config'

type Mode = 'community' | 'parent'
export default function Contact() {
  const [mode,setMode] = useState<Mode>('community')
  const [submitted,setSubmitted] = useState(false)
  const [form,setForm] = useState({name:'',community:'',location:'',role:'',phone:'',message:''})
  const update = (key:string,value:string) => { setForm(old=>({...old,[key]:value})); setSubmitted(false) }
  const submit = (e:FormEvent) => {
    e.preventDefault()
    const details = mode === 'community'
      ? `Community partnership enquiry\nName: ${form.name}\nCommunity: ${form.community}\nLocation: ${form.location}\nRole: ${form.role}\nPhone: ${form.phone}\nMessage: ${form.message}`
      : `Parent enquiry\nParent: ${form.name}\nPhone: ${form.phone}\nCommunity: ${form.community}\nMessage: ${form.message}`
    const url = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(details)}`
    window.open(url,'_blank','noopener,noreferrer')
    setSubmitted(true)
  }
  return <section id="contact" className="contact-section section-pad">
    <div className="contact-intro"><div className="eyebrow"><span/>LET'S START A CONVERSATION</div><h2>YOUR COMMUNITY.<br/><em>THEIR NEXT</em><br/>BIG STEP.</h2><p>Tell us a little about your community or your child's interest. We'll get back to you to discuss the next steps.</p>
      <div className="contact-lines"><a href={`tel:${BRAND.phoneDisplay.replace(/\s/g,'')}`}><Phone size={17}/><span><small>CALL / WHATSAPP</small>{BRAND.phoneDisplay}</span></a><a href={`mailto:${BRAND.email}`}><Mail size={17}/><span><small>EMAIL</small>{BRAND.email}</span></a><div><MapPin size={17}/><span><small>LOCATION</small>Across {BRAND.city}</span></div></div>
      <a className="whatsapp-card" href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noreferrer"><span className="wa-icon"><MessageCircle size={23}/></span><span><b>Prefer WhatsApp?</b><small>Start a quick conversation with us</small></span><ArrowUpRight size={20}/></a>
    </div>
    <div className="form-panel"><div className="form-top"><div><span className="eyebrow">ENQUIRY FORM</span><h3>How can we help?</h3></div><span className="form-index">01 / 02</span></div>
      <div className="form-tabs"><button className={mode==='community'?'active':''} onClick={()=>{setMode('community');setSubmitted(false)}}>Community partnership</button><button className={mode==='parent'?'active':''} onClick={()=>{setMode('parent');setSubmitted(false)}}>Parent enquiry</button></div>
      <form onSubmit={submit}>
        <div className="form-grid"><label>{mode==='community'?'Your name':'Parent name'}<input required value={form.name} onChange={e=>update('name',e.target.value)} placeholder="Enter your name"/></label>
          <label>Phone number<input required type="tel" pattern="[0-9+() -]{8,18}" value={form.phone} onChange={e=>update('phone',e.target.value)} placeholder="Your contact number"/></label>
          <label>Community / apartment name<input required value={form.community} onChange={e=>update('community',e.target.value)} placeholder="Community name"/></label>
          {mode==='community' && <><label>Location in Hyderabad<input required value={form.location} onChange={e=>update('location',e.target.value)} placeholder="Area / locality"/></label><label className="full">Your role<select required value={form.role} onChange={e=>update('role',e.target.value)}><option value="">Select your role</option><option>Association president</option><option>Association secretary</option><option>RWA / committee member</option><option>Community / clubhouse manager</option><option>Other</option></select></label></>}
          <label className="full">Message<textarea rows={3} value={form.message} onChange={e=>update('message',e.target.value)} placeholder="Tell us a little more (optional)"/></label>
        </div>
        <button className="button button-orange form-submit" type="submit">Send enquiry on WhatsApp <ArrowUpRight size={17}/></button>
        <p className="form-note">This opens WhatsApp with your enquiry details. Please review and send the message there.</p>
        {submitted && <div className="form-success"><CheckCircle2 size={16}/> WhatsApp opened with your message. Complete the send action there.</div>}
      </form>
    </div>
  </section>
}
