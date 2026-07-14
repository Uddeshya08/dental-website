'use client';
import { useState } from 'react';
import { submitBooking } from '@/lib/api';

const DATE_OPTS = ['Mon Jul 6', 'Tue Jul 7', 'Wed Jul 8', 'Thu Jul 9'];
const TIME_OPTS = ['9:00 AM','10:30 AM','12:00 PM','1:30 PM','3:00 PM','4:30 PM'];
const DOCTOR_OPTS = ['No preference','Dr. Amanda Cole','Dr. Sophia Rahman','Dr. Liam Patel','Dr. Marcus Reed','Dr. Ethan Brooks'];

export default function FooterForm() {
  const [f, setF] = useState({ name:'', phone:'', email:'', date:'', time:'', doctor:'', agree:true });
  const [sent, setSent] = useState(false);

  const inputStyle: React.CSSProperties = { width:'100%', padding:'14px 16px', borderRadius:12, border:'1px solid hsl(var(--ink-foreground) / 0.14)', background:'hsl(var(--ink-foreground) / 0.06)', color:'hsl(var(--ink-foreground))', fontFamily:'inherit', fontSize:14, outline:'none' };

  const submit = async () => {
    if (!f.name || !f.email) return;
    await submitBooking({ service:'general', date:f.date, time:f.time, name:f.name, email:f.email, phone:f.phone, notes:`Doctor pref: ${f.doctor}` });
    setSent(true);
  };

  if (sent) return (
    <div style={{ textAlign:'center', padding:'44px 10px' }}>
      <div style={{ width:62, height:62, borderRadius:'50%', background:'hsl(var(--primary))', color:'hsl(var(--primary-foreground))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:28, margin:'0 auto 18px' }}>✓</div>
      <div className="font-serif" style={{ fontWeight:600, fontSize:26 }}>Thanks, {f.name}!</div>
      <div style={{ fontSize:14, opacity:.72, marginTop:8, lineHeight:1.6 }}>We&apos;ve received your request and will be in touch shortly to confirm your appointment.</div>
    </div>
  );

  return (
    <div>
      <div className="font-serif" style={{ fontWeight:600, fontSize:25, marginBottom:20 }}>Book Your Appointment</div>
      <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
        <input value={f.name} onChange={e=>setF({...f, name:e.target.value})} placeholder="Your Full Name" style={inputStyle} />
        <input value={f.phone} onChange={e=>setF({...f, phone:e.target.value})} placeholder="Phone Number" type="tel" style={inputStyle} />
        <input value={f.email} onChange={e=>setF({...f, email:e.target.value})} placeholder="Email Address" type="email" style={inputStyle} />
        <select value={f.date} onChange={e=>setF({...f, date:e.target.value})} style={{ ...inputStyle, cursor:'pointer' }}>
          <option value="" style={{ color:'#111' }}>Preferred Date</option>
          {DATE_OPTS.map(o => <option key={o} value={o} style={{ color:'#111' }}>{o}</option>)}
        </select>
        <select value={f.time} onChange={e=>setF({...f, time:e.target.value})} style={{ ...inputStyle, cursor:'pointer' }}>
          <option value="" style={{ color:'#111' }}>Preferred Time</option>
          {TIME_OPTS.map(o => <option key={o} value={o} style={{ color:'#111' }}>{o}</option>)}
        </select>
        <select value={f.doctor} onChange={e=>setF({...f, doctor:e.target.value})} style={{ ...inputStyle, cursor:'pointer' }}>
          <option value="" style={{ color:'#111' }}>Doctor Preference</option>
          {DOCTOR_OPTS.map(o => <option key={o} value={o} style={{ color:'#111' }}>{o}</option>)}
        </select>
      </div>
      <button onClick={()=>setF({...f, agree:!f.agree})} style={{ display:'flex', alignItems:'center', gap:10, margin:'16px 0 18px', background:'none', border:'none', padding:0, cursor:'pointer', fontFamily:'inherit' }}>
        <span style={{ width:20, height:20, borderRadius:6, border:'1px solid hsl(var(--ink-foreground) / 0.35)', background: f.agree ? 'hsl(var(--primary))' : 'transparent', color:'hsl(var(--primary-foreground))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, fontWeight:800 }}>{f.agree ? '✓' : ''}</span>
        <span style={{ fontSize:13, color:'hsl(var(--ink-foreground) / 0.75)' }}>I agree to be contacted to confirm my appointment.</span>
      </button>
      <button onClick={submit} style={{ display:'inline-flex', alignItems:'center', gap:14, border:'none', background:'hsl(var(--primary))', color:'hsl(var(--primary-foreground))', fontWeight:700, fontSize:15, padding:'6px 6px 6px 24px', borderRadius:12, cursor:'pointer', boxShadow:'0 14px 30px -12px hsl(var(--primary) / 0.8)' }}>
        Book Now <span style={{ width:38, height:38, borderRadius:9, background:'hsl(var(--primary-foreground) / 0.18)', display:'flex', alignItems:'center', justifyContent:'center' }}>→</span>
      </button>
    </div>
  );
}
