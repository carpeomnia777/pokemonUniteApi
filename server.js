const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000;

app.use(cors())

const heldItem ={
'assault vest':{
    'description': 'Increase health and special defence, while providing a special attack shield outside of combat' ,
    'stat increase': ['health','special defence', 'shield gain'],
    'conditional': 'initial increase with shield provided outside of combat',
    'tier': 'A',
    'picture' : '#link'
},
'attack weight':{
    'description': 'This item gives a slight boost to attack, which increases upon scoring a goal' ,
    'stat increase': ['attack damage'],
    'conditional': 'increases with goal score',
    'tier': 'B',
    'picture' : '#link'
},
'aeos cookie':{
    'description': 'The aeos cookie provides a slight boost to health and gives an increase to max HP on scoring a goal' ,
    'stat increase': ['health'],
    'conditional': 'increases with goal score',
    'tier': 'B',
    'picture' : '#link'
},
'buddy barrier':{
    'description': 'When using a Unite move, both you and your ally with the lowest health receive a defence shield' ,
    'stat increase': ['shield gain'],
    'conditional': 'after using unite move',
    'tier': 'A',
    'picture' : '#link'
},
'energy amplifier':{
    'description': 'The energy amplifier gives a slight boost to the recharge time of your unite move as well as a slight increase in damage of unite move' ,
    'stat increase': ['Unite move recharge', 'Unite move damage'],
    'conditional': 'initial increase',
    'tier': 'C',
    'picture' : '#link'
},
'exp share':{
    'description': 'This item gives you a boost to health and movement speed, as well as a tiny amount of experience' ,
    'stat increase': ['health', 'movement speed', 'experience gain'],
    'conditional': 'initial increase',
    'tier': 'C',
    'picture' : '#link'
},
'leftovers':{
    'description': 'This item increases your total HP, and allows you to regenerate health outside of battle' ,
    'stat increase': ['health', 'health regen'],
    'conditional': 'initial increase',
    'tier': 'B',
    'picture' : '#link'
},
'focus band':{
    'description': 'Not only does the focus band boost your defenses, it also enables you to recover some HP' ,
    'stat increase': ['special defense', 'health regen'],
    'conditional': 'initial increase',
    'tier': 'A',
    'picture' : '#link'
},
'muscle band':{
    'description': 'The muscle band is for offensive playerstyles, with it increasing attack damage and speed, as well as giving bonus attack damage' ,
    'stat increase': ['attack damage', 'attack speed', 'experience gain'],
    'conditional': 'initial increase',
    'tier': 'S',
    'picture' : '#link'
},
'sp attack specs':{
    'description': 'As the name suggests, the sp attack specs give a boost to your special attack damage' ,
    'stat increase': ['special attack damage'],
    'conditional': 'initial increase',
    'tier': 'C',
    'picture' : '#link'
},
'wise glasses':{
    'description': 'The wise glasses not only increase attack damage but also up the frequency in which you can use them' ,
    'stat increase': ['attack damage', 'attack cooldown'],
    'conditional': 'initial increase',
    'tier': 'A',
    'picture' : '#link'
},
'rocky helmet':{
    'description': 'the rockky helmet gives a nice boost to HP and defence, it also reflects damage' ,
    'stat increase': ['health', 'special defense', 'damage reflect'],
    'conditional': 'initial increase',
    'tier': 'S',
    'picture' : '#link'
},
'float stone':{
    'description': 'This item increases your attack and movement speed' ,
    'stat increase': ['attack speed', 'movement speed'],
    'conditional': 'initial increase',
    'tier': 'S',
    'picture' : '#link'
},
'shell bell':{
    'description': 'Increases special attack, move cooldown and allows you to heal' ,
    'stat increase': ['special attack damage', 'attack cooldown', 'health regen'],
    'conditional': 'initial increase',
    'tier': 'A',
    'picture' : '#link'
},
'scope lens':{
    'description': 'The scope lens increases your critical hit rate and damage' ,
    'stat increase': ['critical hit chance', 'critical hit damage' ],
    'conditional': 'initial increase',
    'tier': 'A',
    'picture' : '#link'
},
'score shield':{
    'description': 'The score shield gives a slight boost to health and focus while providing protection when scoring a goal' ,
    'stat increase': ['health', 'focus', 'shield'],
    'conditional': 'initial increase and shield granted while scoring',
    'tier': 'C',
    'picture' : '#link'
},
'unknown':{
    'description': 'Possible item not in the game yet' ,
    'stat increase': ['???'],
    'conditional': '???',
    'tier': '???',
    'picture' : '#link'
}    

}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const itemName = request.params.name.toLowerCase()
    
    if(heldItem[itemName]){
        response.json(heldItem[itemName])
    }
    else{
        response.json(heldItem['unknown'])
    }
    response.json(heldItem)
    
})
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! better go catch it`)
})