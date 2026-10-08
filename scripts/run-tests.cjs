const fs=require('node:fs');
const cp=require('node:child_process');
if(fs.existsSync('allure-results')) {
  fs.mkdirSync('artifacts/history',{recursive:true});
  fs.renameSync('allure-results',`artifacts/history/results-${Date.now()}`);
}
const files=fs.readdirSync('tests').filter(f=>f.endsWith('.test.cjs')).sort().map(f=>`tests/${f}`);
const result=cp.spawnSync(process.execPath,['node_modules/mocha/bin/mocha.js',...files],{stdio:'inherit',env:{...process.env,SE_TIMEOUT:'30',SE_AVOID_STATS:'true'}});
if(fs.existsSync('allure-results')) {
 const results=fs.readdirSync('allure-results').filter(f=>f.endsWith('-result.json')).map(f=>JSON.parse(fs.readFileSync('allure-results/'+f,'utf8')));
 for(const r of results) console.log(r.status.toUpperCase()+': '+r.name);
 console.log('Tổng số test: '+results.length);
}
process.exitCode=result.status??1;
