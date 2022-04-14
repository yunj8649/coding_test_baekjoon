// 베스트앨범

function solution(genres, plays) {
    var answer = [];
    const collection = [];
    
    for(let i = 0; i < genres.length; i++) {
        const obj = { genre: genres[i],  play: plays[i], index: i }
        collection.push(obj)
    }
    
    const groupByGenre = {}
    const playSum = []
    collection.map((item) => {
        const { genre, play } = item
        if (groupByGenre[genre]) {
            groupByGenre[genre].push(item)
        } else {
            groupByGenre[genre] = [item]
        }
        
        const idx = playSum.findIndex((item) => item.key === genre)
        if (idx === -1) {
            playSum.push({key: genre, value: play})
        } else {
            playSum[idx].value += play
        }
    })
    
    playSum.sort((a,b) => (b.value - a.value))
    
    playSum.map(item => {
        const key = item['key']
        const genre = (groupByGenre[key]).sort((a,b) => (b.play - a.play)) 
        for(let i = 0; i < 2; i++) {
            if (genre[i]) answer.push(genre[i].index)
        }
    })

    return answer;
}