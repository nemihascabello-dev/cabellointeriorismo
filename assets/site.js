'use strict';
(() => {
  const menuButtons = [...document.querySelectorAll('[data-menu-button]')];
  function closeMenus(){
    for (const btn of menuButtons){
      btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Abrir menú');
      const panel = document.getElementById(btn.dataset.menuButton);if(panel) panel.hidden = true;
    }
  }
  for (const btn of menuButtons) {
    btn.addEventListener('click',()=>{
      const panel=document.getElementById(btn.dataset.menuButton);if(!panel)return;
      const wasOpen = btn.getAttribute('aria-expanded') === 'true';
      closeMenus();
      if(!wasOpen){panel.hidden=false;btn.setAttribute('aria-expanded','true');btn.setAttribute('aria-label','Cerrar menú');}
    });
  }
  document.addEventListener('keydown', e => {if(e.key==='Escape')closeMenus();});
  document.addEventListener('click',e=> {if(!e.target.closest('.site-header'))closeMenus();});
  document.querySelectorAll('.menu-panel a').forEach(a=>a.addEventListener('click',closeMenus));
  window.addEventListener('resize', closeMenus, {passive:true});
  // Interactive inspiration gallery: only one category is visible at a time.
  const filterButtons=[...document.querySelectorAll('[data-filter]')];
  const photos=[...document.querySelectorAll('.gallery-item[data-category]')];
  for (const btn of filterButtons) btn.addEventListener('click',()=>{
    const choice=btn.dataset.filter;
    for(const button of filterButtons){const selected=button===btn;button.classList.toggle('active',selected);button.setAttribute('aria-pressed',String(selected));}
    for(const item of photos) item.hidden = choice!=='all' && item.dataset.category!==choice;
  });
  const dialog=document.getElementById('gallery-lightbox');
  if(dialog){
    const preview=dialog.querySelector('img');const caption=dialog.querySelector('p');
    for(const item of photos) item.addEventListener('click',()=>{
      preview.src=item.dataset.photo;preview.alt=item.dataset.alt;
      caption.textContent=`${item.dataset.label} · ${item.dataset.alt}`;
      if(typeof dialog.showModal==='function')dialog.showModal();
    });
    dialog.querySelector('.lightbox-close')?.addEventListener('click',()=>dialog.close());
    dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
  }
  // This form is deliberately a working *preview*, not a false submission.
  const form=document.getElementById('quote-form');
  if(form){
    const feedback=document.getElementById('form-feedback');const prepared=document.getElementById('prepared');const textArea=document.getElementById('prepared-text');
    form.addEventListener('submit',e=>{
      e.preventDefault();
      if(!form.reportValidity()){feedback.textContent='Completa los campos obligatorios para preparar tu consulta.';return;}
      const d=new FormData(form);
      const summary=['Consulta preparada para CABELLO | Cocinas & Interiores',`Nombre: ${d.get('nombre')}`,`Teléfono o WhatsApp: ${d.get('telefono')}`,`Proyecto: ${d.get('servicio')}`,`Zona: ${d.get('zona') || 'No indicada'}`,`Medidas: ${d.get('medidas') || 'Pendientes'}`,`Presupuesto orientativo: ${d.get('presupuesto') || 'No indicado'}`,'',`Mensaje: ${d.get('mensaje')}`,'','Nota: consulta preparada en una maqueta; no se ha enviado automáticamente.'].join('\n');
      textArea.value=summary;prepared.hidden=false;feedback.textContent='Consulta preparada. Puedes copiarla, pero todavía no se ha enviado.';
      prepared.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'nearest'});
    });
    document.getElementById('copy-prepared')?.addEventListener('click',async(e)=>{
      try{await navigator.clipboard.writeText(textArea.value);e.currentTarget.textContent='Consulta copiada ✓';}
      catch{ textArea.focus();textArea.select();e.currentTarget.textContent='Selecciona el texto y cópialo';}
    });
  }
})();
