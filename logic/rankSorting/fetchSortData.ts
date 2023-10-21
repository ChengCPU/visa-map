import totalSort from './totalSort';
import visaFreeSort from './visaFreeSort';
import alphabeticalSort from './alphabeticalSort';
import freedomOfMovementSort from './freedomOfMovementSort';
const countriesAndTerritories:string[] = ['AB','AF','AL','DZ','AS','AD','AO','AI','AG','AR','AM','AK','AW','AC','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','XB','BA','BW','BR','IO','VG','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CO','KM','CK','CR','HR','CU','CW','CY','CZ','CD','DK','DJ','DM','DO','TL','EC','EG','SV','GQ','ER','EE','SZ','ET','FK','FO','FJ','FI','FR','GF','PF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GN','GW','GY','HT','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IL','IT','CI','JM','XM','JP','JO','KZ','KE','KI','XK','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','NC','NZ','NI','NE','NG','NU','RC','MP','KP','MK','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','QA','CG','RE','RO','RU','RW','XS','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','RS','SC','SL','SG','XE','SX','SK','SI','SB','SO','XX','ZA','KR','XO','SS','ES','LK','SD','SR','XV','SE','CH','SY','TW','TJ','TZ','TH','TG','TK','TO','XT','TT','TX','TN','TR','TM','TC','TV','UG','UA','AE','GB','US','VI','UY','UZ','VU','VA','VE','VN','WF','EH','YE','ZM','ZW']
const passportsArray:any = ['abkhazia','afghanistan','albania','algeria','andorra','angola','anguilla','antiguaAndBarbuda','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bosniaAndHerzegovina','botswana','brazil','britishVirginIslands','brunei','bulgaria','burkinaFaso','burundi','cambodia','cameroon','canada','capeVerde','caymanIslands','centralAfricanRepublic','chad','chile','china','colombia','comoros','costaRica','croatia','cuba','cyprus','czechRepublic','democraticRepublicOfTheCongo','denmark','djibouti','dominica','dominicanRepublic','eastTimor','ecuador','egypt','elSalvador','equatorialGuinea','eritrea','estonia','eswatini','ethiopia','fiji','finland','france','gabon','gambia','georgia','germany','ghana','greece','grenada','guatemala','guinea','guineaBissau','guyana','haiti','honduras','hongKong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivoryCoast','jamaica','japan','jordan','kazakhstan','kenya','kiribati','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshallIslands','mauritania','mauritius','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','newZealand','nicaragua','niger','nigeria','northKorea','northMacedonia','norway','oman','pakistan','palau','panama','papuaNewGuinea','paraguay','peru','philippines','poland','portugal','qatar','republicOfTheCongo','romania','russia','rwanda','saintHelena','saintKittsAndNevis','saintLucia','saintVincentAndTheGrenadines','samoa','sanMarino','saoTomeAndPrincipe','saudiArabia','senegal','serbia','seychelles','sierraLeone','singapore','slovakia','slovenia','solomonIslands','somalia','southAfrica','southKorea','southOssetia','southSudan','spain','sriLanka','sudan','suriname','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tonga','trinidadAndTobago','tunisia','turkey','turkmenistan','turksAndCaicos','tuvalu','uganda','ukraine','unitedArabEmirates','unitedKingdom','unitedStates','uruguay','uzbekistan','vanuatu','vaticanCity','venezuela','vietnam','yemen','zambia','zimbabwe']

export default function fetchSortData(rankRef:any, num:number, sort:string) {
  let [visaFreeCount, visaOnArrivalEVisaCount, visaOnArrivalCount, eVisaCount, visaRequiredCount, total, freedomOfMovement] = [0,0,0,0,0,0,0]
  const rankData = []
  fetch('visaPolicy.json')
  .then((res) => res.json())
  .then((data) => {
    for(const passport of passportsArray) {
      for(let countriesLoop = 0; countriesLoop < countriesAndTerritories.length; countriesLoop++) {
        if(data[passport][countriesAndTerritories[countriesLoop]] == 2 || data[passport][countriesAndTerritories[countriesLoop]] == 3 || data[passport][countriesAndTerritories[countriesLoop]] == 4 || data[passport][countriesAndTerritories[countriesLoop]] == 5 || data[passport][countriesAndTerritories[countriesLoop]] == 6) {visaFreeCount++;freedomOfMovement++}
        if(data[passport][countriesAndTerritories[countriesLoop]] == 8 || countriesLoop == countriesAndTerritories.length - 1) {visaOnArrivalEVisaCount++}
        if(data[passport][countriesAndTerritories[countriesLoop]] == 9 || countriesLoop == countriesAndTerritories.length - 1) {visaOnArrivalCount++}
        if(data[passport][countriesAndTerritories[countriesLoop]] == 10 || countriesLoop == countriesAndTerritories.length - 1) {eVisaCount++}
        if(data[passport][countriesAndTerritories[countriesLoop]] == 14 || data[passport][countriesAndTerritories[countriesLoop]] == 12 || data[passport][countriesAndTerritories[countriesLoop]] == 11 || data[passport][countriesAndTerritories[countriesLoop]] == 13 || countriesLoop == countriesAndTerritories.length - 1) {visaRequiredCount++}
        if(data[passport][countriesAndTerritories[countriesLoop]] == 0 || data[passport][countriesAndTerritories[countriesLoop]] == 7 || countriesLoop == countriesAndTerritories.length - 1) {
          visaFreeCount++
          if(countriesLoop == countriesAndTerritories.length - 1) {
            visaFreeCount - 2;visaOnArrivalEVisaCount--;visaOnArrivalCount--;eVisaCount--;visaRequiredCount--
            total = visaFreeCount + visaOnArrivalEVisaCount + visaOnArrivalCount + eVisaCount
            rankData.push([passport, visaFreeCount, visaOnArrivalEVisaCount, visaOnArrivalCount, eVisaCount, visaRequiredCount, total, freedomOfMovement])
          }
        }
      }
      [visaFreeCount, visaOnArrivalEVisaCount, visaOnArrivalCount, eVisaCount, visaRequiredCount, total, freedomOfMovement] = [0,0,0,0,0,0,0]
    }

    //Adding extra freedom of movement count to denmark due to territories being classified as home country
    rankData[49][7] += 2
    
    //Adding extra freedom of movement count to france due to territories being classified as home country
    rankData[64][7] += 11

    rankRef.current = rankData
    
    switch(num) {
      case 1: totalSort(rankData, rankRef, sort); break;
      case 2: visaFreeSort(rankData, rankRef, sort); break;
      case 3: alphabeticalSort(rankData, rankRef, sort); break;
      case 4: freedomOfMovementSort(rankData, rankRef, sort); break;
    }
  })
}