export default function BrainFuck(code){
    let memory = Array(100).fill(0)
    let pointer =0
    let isLooping = false
    let insideLoop = 0
    let stackLoop =[]
    let response =[]

    for(let i =0;i<code.length;i++){

        let char = code[i]
        if(isLooping){
            if(char ==="[") insideLoop++
            if(char ==="]"){
                if(insideLoop===0){
                    isLooping=false
                }else insideLoop--
                }
        }
        // console.log(char)
        switch(char){
            case "+":{
                memory[pointer]++
                break
            }
            case "-":{
                memory[pointer]--
                break
            }
            case ">":{
                pointer <100? pointer++:pointer =0
                memory[pointer] = memory[pointer] ||0
                break
            } 
            case "<":{
                pointer >0? pointer --:pointer = 100
                memory[pointer] = memory[pointer] || 0
                break
            }
            case ".":{
                response[i] = String.fromCharCode(memory[pointer])
                break
            }
            case ",":{
                const value  = prompt("caracter")[0].charCodeAt()
                memory[pointer] = value
                break
            }
            case "[":{
                memory[pointer] ===0 ? isLooping =true:stackLoop.push(i)
                break
            }
            case "]":{
                memory[pointer] !==0? i = stackLoop[stackLoop.length-1]:stackLoop.pop()
                break
            }
            default:
                break
        }
    }
    return response.join("")
}
// BrainFuck(`
// ++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++
// ..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.
// `)