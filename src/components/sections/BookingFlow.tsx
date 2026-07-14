'use client';
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';
import { submitBooking } from '@/lib/api';

const TIMES = ['9:00 AM','10:30 AM','12:00 PM','1:30 PM','3:00 PM','4:30 PM'];

function buildDates() {
  const dows = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const out: { key:number; dow:string; day:number; month:string }[] = [];
  const base = new Date();
  for (let i = 0; out.length < 6 && i < 14; i++) {
    const d = new Date(base); d.setDate(base.getDate() + i);
    if (d.getDay() === 0) continue;
    out.push({ key:i, dow:dows[d.getDay()], day:d.getDate(), month:d.toLocaleString('en',{month:'short'}) });
  }
  return out;
}

export default function BookingFlow() {
  const params = useSearchParams();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [service, setService] = useState<string | null>(null);
  const [date, setDate] = useState<number | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [form, setForm] = useState({ name:'', email:'', phone:'' });
  const [notes, setNotes] = useState('');
  const [done, setDone] = useState(false);
  const dates = useMemo(buildDates, []);

  useEffect(() => {
    const s = params.get('service');
    if (s) setService(s);
  }, [params]);

  const svc = SERVICES.find(x => x.slug === service);
  const dObj = dates.find(d => d.key === date);
  const summaryService = svc ? svc.name : 'your visit';
  const summaryWhen = (dObj ? `${dObj.dow} ${dObj.month} ${dObj.day}` : 'a day') + (time ? ` at ${time}` : '');

  const nextValid =
    (step === 1 && !!service) ||
    (step === 2 && !!(date !== null && time)) ||
    (step === 3 && !!(form.name && form.email));

  const nextStep = async () => {
    if (!nextValid) return;
    if (step === 3) {
      await submitBooking({ service: service!, date: `${dObj?.dow} ${dObj?.month} ${dObj?.day}`, time: time!, name: form.name, email: form.email, phone: form.phone, notes });
      setDone(true);
      return;
    }
    setStep(step + 1);
  };

  const stepLabels = ['Choose a service', 'Pick a date & time', 'Your details'];

  if (done) return (
    <section style={{ maxWidth:760, margin:'0 auto', padding:'48px 24px 0' }}>
      <div style={{ textAlign:'center', padding:'56px 32px', borderRadius:28, background:'hsl(var(--surface) / 0.66)', backdropFilter:'blur(18px)', border:'1px solid hsl(var(--border) / 0.7)', boxShadow:'0 24px 60px -28px hsl(var(--primary) / 0.4)' }}>
        <div style={{ width:72, height:72, borderRadius:'50%', background:'hsl(var(--success) / 0.15)', color:'hsl(var(--success))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:34, margin:'0 auto 20px' }}>✓</div>
        <h1 className="font-serif" style={{ fontWeight:600, fontSize:36, letterSpacing:'-.02em', margin:'0 0 10px' }}>You&apos;re booked!</h1>
        <p style={{ fontSize:16.5, color:'hsl(var(--muted))', lineHeight:1.6, maxWidth:'26em', margin:'0 auto 24px' }}>
          We&apos;ve held <strong style={{ color:'hsl(var(--foreground))' }}>{summaryService}</strong> on <strong style={{ color:'hsl(var(--foreground))' }}>{summaryWhen}</strong>. A confirmation is on its way to {form.email || 'your inbox'}.
        </p>
        <div style={{ display:'inline-flex', gap:12 }}>
          <button onClick={() => { setStep(1); setService(null); setDate(null); setTime(null); setForm({name:'',email:'',phone:''}); setNotes(''); setDone(false); }} style={{ border:'1px solid hsl(var(--border))', background:'hsl(var(--surface) / 0.6)', color:'hsl(var(--foreground))', fontWeight:600, fontSize:15, padding:'13px 22px', borderRadius:999, cursor:'pointer', fontFamily:'inherit' }}>Book another</button>
          <Link href="/" style={{ background:'hsl(var(--primary))', color:'hsl(var(--primary-foreground))', fontWeight:700, fontSize:15, padding:'13px 24px', borderRadius:999, textDecoration:'none' }}>Back to home</Link>
        </div>
      </div>
    </section>
  );

  return (
    <section style={{ maxWidth:760, margin:'0 auto', padding:'48px 24px 0' }}>
      <div style={{ textAlign:'center', marginBottom:26 }}>
        <div style={{ fontSize:13, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'hsl(var(--accent))' }}>Book Appointment</div>
        <h1 className="font-serif" style={{ fontWeight:600, fontSize:40, letterSpacing:'-.02em', margin:'8px 0 0' }}>{stepLabels[step-1]}</h1>
      </div>

      <div style={{ display:'flex', alignItems:'center', gap:8, justifyContent:'center', marginBottom:30 }}>
        {[1,2,3].map(n => {
          const on = step >= n;
          return (
            <div key={n} style={{ display:'flex', alignItems:'center', gap:8 }}>
              <span style={{ width:30, height:30, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:13, background: on ? 'hsl(var(--primary))' : 'hsl(var(--muted-bg))', color: on ? 'hsl(var(--primary-foreground))' : 'hsl(var(--muted))', border:`1px solid ${on ? 'hsl(var(--primary))' : 'hsl(var(--border))'}` }}>{n}</span>
              {n < 3 && <span style={{ width:26, height:2, background: step > n ? 'hsl(var(--primary))' : 'hsl(var(--border))' }} />}
            </div>
          );
        })}
      </div>

      <div style={{ padding:30, borderRadius:26, background:'hsl(var(--surface) / 0.66)', backdropFilter:'blur(18px)', border:'1px solid hsl(var(--border) / 0.7)', boxShadow:'0 20px 50px -28px hsl(var(--primary) / 0.35)' }}>
        {step === 1 && (
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
            {SERVICES.map(s => {
              const on = service === s.slug;
              return (
                <button key={s.slug} onClick={() => setService(s.slug)} style={{ textAlign:'left', cursor:'pointer', padding:18, borderRadius:16, background: on ? 'hsl(var(--primary) / 0.08)' : 'hsl(var(--surface))', border:`1.5px solid ${on ? 'hsl(var(--primary))' : 'hsl(var(--border))'}`, fontFamily:'inherit' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ display:'flex', width:38, height:38, borderRadius:11, alignItems:'center', justifyContent:'center', background:'hsl(var(--primary) / 0.12)', color:'hsl(var(--primary))', fontSize:18 }}>{s.icon}</span>
                    <span style={{ width:20, height:20, borderRadius:'50%', border:`1.5px solid ${on ? 'hsl(var(--primary))' : 'hsl(var(--border))'}`, background: on ? 'hsl(var(--primary))' : 'transparent' }} />
                  </div>
                  <div style={{ marginTop:12, fontWeight:700, fontSize:15.5, color:'hsl(var(--foreground))' }}>{s.name}</div>
                  <div style={{ fontSize:12.5, color:'hsl(var(--muted))', marginTop:3 }}>{s.category}</div>
                </button>
              );
            })}
          </div>
        )}

        {step === 2 && (
          <div>
            <div style={{ fontWeight:700, fontSize:15, marginBottom:12 }}>Pick a day</div>
            <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginBottom:26 }}>
              {dates.map(d => {
                const on = date === d.key;
                return (
                  <button key={d.key} onClick={() => setDate(d.key)} style={{ cursor:'pointer', padding:'12px 14px', borderRadius:14, background: on ? 'hsl(var(--primary))' : 'hsl(var(--surface))', border:`1.5px solid ${on ? 'hsl(var(--primary))' : 'hsl(var(--border))'}`, color: on ? 'hsl(var(--primary-foreground))' : 'hsl(var(--foreground))', textAlign:'center', minWidth:66, fontFamily:'inherit' }}>
                    <div style={{ fontSize:12, fontWeight:600, opacity:.8 }}>{d.dow}</div>
                    <div className="font-serif" style={{ fontWeight:600, fontSize:22, lineHeight:1.1 }}>{d.day}</div>
                    <div style={{ fontSize:11, opacity:.7 }}>{d.month}</div>
                  </button>
                );
              })}
            </div>
            <div style={{ fontWeight:700, fontSize:15, marginBottom:12 }}>Available times</div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10 }}>
              {TIMES.map(t => {
                const on = time === t;
                return (
                  <button key={t} onClick={() => setTime(t)} style={{ cursor:'pointer', padding:12, borderRadius:12, background: on ? 'hsl(var(--primary))' : 'hsl(var(--surface))', border:`1.5px solid ${on ? 'hsl(var(--primary))' : 'hsl(var(--border))'}`, color: on ? 'hsl(var(--primary-foreground))' : 'hsl(var(--foreground))', fontWeight:600, fontSize:14, fontFamily:'inherit' }}>{t}</button>
                );
              })}
            </div>
          </div>
        )}

        {step === 3 && (
          <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
            {[
              { k:'name', label:'Full name', placeholder:'Jordan Rivera', type:'text' },
              { k:'email', label:'Email', placeholder:'you@email.com', type:'email' },
              { k:'phone', label:'Phone', placeholder:'(555) 000-0000', type:'tel' }
            ].map(f => (
              <label key={f.k} style={{ display:'block' }}>
                <span style={{ display:'block', fontWeight:600, fontSize:13.5, marginBottom:7, color:'hsl(var(--foreground))' }}>{f.label}</span>
                <input value={(form as any)[f.k]} onChange={e => setForm({ ...form, [f.k]: e.target.value })} placeholder={f.placeholder} type={f.type} style={{ width:'100%', padding:'13px 15px', borderRadius:13, border:'1.5px solid hsl(var(--border))', background:'hsl(var(--surface))', color:'hsl(var(--foreground))', fontFamily:'inherit', fontSize:15, outline:'none' }} />
              </label>
            ))}
            <label style={{ display:'block' }}>
              <span style={{ display:'block', fontWeight:600, fontSize:13.5, marginBottom:7 }}>Anything we should know? (optional)</span>
              <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Nervous patient, running late, specific concern…" rows={3} style={{ width:'100%', padding:'13px 15px', borderRadius:13, border:'1.5px solid hsl(var(--border))', background:'hsl(var(--surface))', color:'hsl(var(--foreground))', fontFamily:'inherit', fontSize:15, outline:'none', resize:'vertical' }} />
            </label>
            <div style={{ padding:16, borderRadius:14, background:'hsl(var(--muted-bg) / 0.7)', border:'1px solid hsl(var(--border) / 0.6)', fontSize:14, color:'hsl(var(--muted))' }}>Summary: <strong style={{ color:'hsl(var(--foreground))' }}>{summaryService}</strong> · {summaryWhen}</div>
          </div>
        )}

        <div style={{ display:'flex', justifyContent:'space-between', marginTop:26 }}>
          <button onClick={() => setStep(Math.max(1, step - 1))} style={{ visibility: step > 1 ? 'visible' : 'hidden', border:'1px solid hsl(var(--border))', background:'hsl(var(--surface) / 0.6)', color:'hsl(var(--foreground))', fontWeight:600, fontSize:15, padding:'13px 22px', borderRadius:999, cursor:'pointer', fontFamily:'inherit' }}>← Back</button>
          <button onClick={nextStep} disabled={!nextValid} style={{ border:'none', background: nextValid ? 'hsl(var(--primary))' : 'hsl(var(--muted))', color:'hsl(var(--primary-foreground))', fontWeight:700, fontSize:15, padding:'13px 28px', borderRadius:999, cursor: nextValid ? 'pointer' : 'not-allowed', opacity: nextValid ? 1 : .55, fontFamily:'inherit' }}>{step === 3 ? 'Confirm booking' : 'Continue'}</button>
        </div>
      </div>
    </section>
  );
}
