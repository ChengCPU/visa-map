const ISOcodesLowercase:string[] = ['ab','af','al','dz','as','ad','ao','ai','ag','ar','am','aw','ac','au','at','az','bs','bh','bd','bb','by','be','bz','bj','bm','bt','bo','xb','ba','bw','br','io','vg','bn','bg','bf','bi','kh','cm','ca','cv','ky','cf','td','cl','cn','co','km','ck','cr','hr','cu','cw','cy','cz','cd','dk','dj','dm','do','tl','ec','eg','sv','gq','er','ee','sz','et','fk','fo','fj','fi','fr','gf','pf','ga','gm','ge','de','gh','gi','gr','gl','gd','gp','gu','gt','gn','gw','gy','ht','hn','hk','hu','is','in','id','ir','iq','ie','il','it','ci','jm','xm','jp','jo','kz','ke','ki','xk','kx','kw','kg','la','lv','lb','ls','lr','ly','li','lt','lu','mo','mg','mw','my','mv','ml','mt','mh','mq','mr','mu','yt','mx','fm','md','mc','mn','me','ms','ma','mz','mm','na','nr','np','nl','nc','nz','ni','ne','ng','nu','rc','mp','kp','mk','no','om','pk','pw','ps','pa','pg','py','pe','ph','pn','pl','pt','qa','cg','re','ro','ru','rw','xs','bl','sh','kn','lc','mf','pm','vc','ws','sm','st','sa','sn','rs','sc','sl','sg','xe','sx','sk','si','sb','so','xx','za','kr','xo','ss','es','lk','sd','sr','xv','se','ch','sy','tw','tj','tz','th','tg','tk','to','xt','tt','tx','tn','tr','tm','tc','tv','ug','ua','ae','gb','us','vi','uy','uz','vu','va','ve','vn','wf','eh','ye','zm','zw']

export default function percentageCalculation(priorityRef:any, setPercentage:Function) {
  let globalCount = 0

  for(let global = 0; global < ISOcodesLowercase.length; global++) {
    if(priorityRef.current[ISOcodesLowercase[global]] != 'rgb(150,150,150)' && priorityRef.current[ISOcodesLowercase[global]] != 'rgb(0,0,0)' && priorityRef.current[ISOcodesLowercase[global]] != 'rgb(255,0,0)' && priorityRef.current[ISOcodesLowercase[global]] != 'rgb(200,200,200)') {
      globalCount++
      if(global == ISOcodesLowercase.length - 1) {
        setPercentage(globalCount)
      }
    }
  }
}