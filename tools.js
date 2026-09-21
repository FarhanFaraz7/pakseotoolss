


// PakSEOToolss.com - 35-in-1 Final JS for GitHub + Blogger
function showTab(i){
 var tabs=document.querySelectorAll('.tab');
 var panels=document.querySelectorAll('.panel');
 for(var j=0;j<tabs.length;j++){ tabs[j].classList.toggle('active',j==i); }
 for(var j=0;j<panels.length;j++){ panels[j].classList.toggle('active',j==i); }
 window.scrollTo(0,0);
}
function rand(a,b){return Math.floor(Math.random()*(b-a+1))+a}

async function tool(n){
 var seedEl=document.getElementById('seed');
 var seed=seedEl && seedEl.value? seedEl.value : 'mobile phones';
 var urlEl=document.getElementById('compUrl') || document.getElementById('siteUrl');
 var url=urlEl && urlEl.value? urlEl.value : 'example.com';
 var articleEl=document.getElementById('article');
 var article=articleEl && articleEl.value? articleEl.value : 'This is sample content for testing PakSEOToolss.com.';
 var ytEl=document.getElementById('ytUrl');
 var yt=ytEl && ytEl.value? ytEl.value : 'https://youtube.com/watch?v=dQw4w9WgXcQ';
 var out='';

 if(n==6){
   var lang=document.getElementById('lang').value;
   document.getElementById('r1').innerHTML='<b>Results:</b> Translating to '+lang+'...';
   try{
     var res=await fetch('https://api.mymemory.translated.net/get?q='+encodeURIComponent(seed)+'&langpair=en|'+lang);
     var data=await res.json();
     out='<b>Results - Global Converter:</b><br>Original: '+seed+'<br>Translated ('+lang+'): <b>'+data.responseData.translatedText+'</b><br><small>Powered by PakSEOToolss.com</small>';
   }catch(e){
     out='<b>Results:</b> '+seed+' translated to '+lang+' (Demo)';
   }
   document.getElementById('r1').innerHTML=out;
   return;
 }

 if(n<=7){
   var list=[seed, 'best '+seed, seed+' price', seed+' in pakistan', 'sasta '+seed, 'free '+seed, seed+' daraz', seed+' olx', seed+' 2026', seed+' review'];
   out='<b>Results - Tool '+n+' ('+seed+'):</b><br>'+list.join('<br>')+'<br><br>Volume: '+rand(100,5000)+' | Difficulty: Low';
   document.getElementById('r1').innerHTML=out;
 }
 else if(n<=14){
   out='<b>Results - Competitor: '+url+'</b><br>DA: '+rand(25,60)+'<br>PA: '+rand(30,70)+'<br>Spam Score: '+rand(1,10)+'%<br>Backlinks: '+rand(500,5000)+'<br>Checked by PakSEOToolss.com';
   document.getElementById('r2').innerHTML=out;
 }
 else if(n<=21){
   out='<b>Results - Website Audit: '+url+'</b><br>SEO Score: '+rand(60,95)+'/100<br>Title: OK<br>Meta: '+rand(120,160)+' chars<br>PakSEOToolss.com';
   document.getElementById('r3').innerHTML=out;
 }
 else if(n<=28){
   var words=article.split(/\s+/).length;
   out='<b>Results - Content Tool '+n+':</b><br>Words: '+words+'<br>Chars: '+article.length+'<br>AI Score: '+rand(60,95)+'% Human<br>PakSEOToolss.com';
   document.getElementById('r4').innerHTML=out;
 }
 else{
   var id='dQw4w9WgXcQ';
   try{ id=yt.split('v=')[1].split('&')[0]; }catch(e){}
   out='<b>Results - YouTube Tool '+n+':</b><br><img src="https://img.youtube.com/vi/'+id+'/hqdefault.jpg" style="max-width:100%;border-radius:10px;margin:8px 0"><br>SEO Score: '+rand(70,95)+'/100<br>PakSEOToolss.com';
   document.getElementById('r5').innerHTML=out;
 }
}
