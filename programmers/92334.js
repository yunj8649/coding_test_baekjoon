function solution(id_list, report, k) {
    // 초기화
    const report_result = [];
    id_list.map(id => (report_result.push({id, reporters: []})))
    
    report.map(r => {
        const [reporter, user] = r.split(' ');
        const findUserIdx = report_result.findIndex(o => o.id === user);
        const reporters = report_result[findUserIdx]['reporters'];
        
        if (!reporters.includes(reporter)) {
            reporters.push(reporter);
            report_result[findUserIdx]['reporters'] = reporters;
        }
    })
    
    // 메일 보내기
    const mail_count = id_list.map(o => 0);
    report_result.map(result => {
        if(result['reporters'].length >= k) {
            result['reporters'].map(r => {
                const idx = id_list.indexOf(r)
                mail_count[idx]++;
            })
            
        }
    })
    
    return mail_count;
}