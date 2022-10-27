import axios from "axios";

const urlBase ="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"

const allChars = async (state) => {
    const req = await axios.get(urlBase)
    const heroejson = req.data
    state(heroejson)
   
}

const myHeroe = async (id, state) => {
    const heroReq = await axios.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
    console.log(heroReq.data)
    const h = heroReq.data
    state(h)
}

export{ allChars, myHeroe }


