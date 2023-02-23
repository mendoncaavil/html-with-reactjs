

const FunctionComponent = () => {

  const { useState } = React

  const[value, setvalues] = useState({onboardingCall:[null,null,null,null],
  consoleAccess:[null,null,null,null],
  analyticsAccess:[null,null,null,null],
  websiteAccess:[null,null,null,null],
  technicalAudit:[null,null,null,null],
  achorText:[null,null,null,null],
  competitorAnalysis:[null,null,null,null],
  urlMapping:[null,null,null,null],
  localReporting:[null,null,null,null],
});
// console.log(value["onboardingCall"][2])

 const handleCell = (e,key,index)=>{
const newState = {...value};
newState[key][index] = e.target.innerHTML;

setvalues(newState);

console.log(value)
 }

  return (
    <div>
    <table>
      <tr>
        <th>MONTH 1</th>
      </tr>
      <tr>
        <th>Onboarding call</th>
        {value.onboardingCall.map((i,index)=> <td contenteditable="true" onKeyUp={(event)=>handleCell(event, "onboardingCall",index)}></td>)}
      </tr>
      <tr>
        <th>Google search console access</th>
        {value.consoleAccess.map((i,index)=> <td contenteditable="true" onKeyUp={(event)=>handleCell(event, "consoleAccess",index)}></td>)}
      </tr>
      <tr>
        <th>Google analytics access</th>
        {value.analyticsAccess.map((i,index)=> <td contenteditable="true" onKeyUp={(event)=>handleCell(event, "analyticsAccess",index)}></td>)}

      </tr>
      <tr>
        <th>Website access</th>
        {value.websiteAccess.map((i,index)=> <td contenteditable="true" onKeyUp={(event)=>handleCell(event, "websiteAccess",index)}></td>)}

      </tr>
      <tr>
        <th>technical Audit</th>
        {value.technicalAudit.map((i,index)=> <td contenteditable="true" onKeyUp={(event)=>handleCell(event, "technicalAudit",index)}></td>)}

      </tr>
      <tr>
        <th>Anchor Text</th>
        {value.achorText.map((i,index)=> <td contenteditable="true" onKeyUp={(event)=>handleCell(event, "achorText",index)}></td>)}

      </tr>
      <tr>
        <th>Competitor Analysis</th>
        {value.competitorAnalysis.map((i,index)=> <td contenteditable="true" onKeyUp={(event)=>handleCell(event, "competitorAnalysis",index)}></td>)}

      </tr>
      <tr>
        <th>URL Mapping</th>
        {value.urlMapping.map((i,index)=> <td contenteditable="true" onKeyUp={(event)=>handleCell(event, "urlMapping",index)}></td>)}

      </tr>
      <tr>
        <th>Local Reporting Suite</th>
        {value.localReporting.map((i,index)=> <td contenteditable="true" onKeyUp={(event)=>handleCell(event, "localReporting",index)}></td>)}

      </tr>
    </table>
    </div>
  );
};



