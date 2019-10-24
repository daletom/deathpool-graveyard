window.imgix.config.host = 'tom.imgix.net';

Vue.component('deathpool', {
      props: ['name', 'avatar', 'reason'],
      template: `
      <div class="indiv">
      <img 
      :ix-path="avatar"
      :ix-params='{
            "fit": "facearea",
            "facepad": "1.7",
            "auto": "format,compress",
            "mask": "ellispse",
            "fm": "png"
      }'
      />
      <h2>{{ name }}</h2>
      <h3>{{ reason }}</h3>
      </div>
      `
})

new Vue({
      el: '#app_deathpool',
      data: {
            characters: [
                  { id: 1, name: 'Beric Dondarrion', avatar: 'https://tom.imgix.net/bericdondarrion.jpg', reason: 'Killed by Whites' },
                  { id: 2, name: 'Theon Greyjoy', avatar: 'https://tom.imgix.net/theongreyjoy.jpg', reason: 'Impaled by the Night King' },
                  { id: 3, name: 'The Night King', avatar: 'https://tom.imgix.net/nightking.jpg', reason: 'Killed by Arya Stark' },
                  { id: 4, name: 'Viserion', avatar: 'https://tom.imgix.net/viserion.jpg', reason: 'Died when the night king was killed' },
                  { id: 5, name: 'Jorah Mormont', avatar: 'https://tom.imgix.net/jorahmormont.png', reason: 'Killed by a swarm of whites' },
                  { id: 6, name: 'Melisandre', avatar: 'https://tom.imgix.net/melisandre.jpg', reason: 'Died of old age' },
                  { id: 7, name: 'Missandei', avatar: 'https://tom.imgix.net/missandei.jpg', reason: 'Beheaded by The Mountain' },
                  { id: 8, name: 'Rhaegal', avatar: 'https://tom.imgix.net/rhaegal.jpg', reason: 'Killed by Euron & the iron fleet' },
                  { id: 9, name: 'Varys', avatar: 'https://tom.imgix.net/varys.jpg', reason: 'Burned alive by Drogon' },
                  { id: 10, name: 'Euron Greyjoy', avatar: 'https://tom.imgix.net/eurongreyjoy.png', reason: 'Killed by Jaime Lannister' },
                  { id: 11, name: 'Qyburn', avatar: 'https://tom.imgix.net/qyburn.png', reason: 'Head smashed in by The Mountain' },
                  { id: 12, name: 'The Mountain', avatar: 'https://tom.imgix.net/mountain.jpg', reason: 'Tackled off castle to fiery death by The Hound' },
                  { id: 13, name: 'The Hound', avatar: 'https://tom.imgix.net/sandorclegane.jpg', reason: 'Died tackling The Mountain off castle' },
                  { id: 14, name: 'Jaime Lannister', avatar: 'https://tom.imgix.net/jaimelannister.png', reason: 'Crushed to death in collapse of castle' },
                  { id: 15, name: 'Cersei Lannister', avatar: 'https://tom.imgix.net/cersei.jpg', reason: 'Crushed to death in collapse of castle' },
                  { id: 16, name: 'Daenerys Targaryen', avatar: 'https://tom.imgix.net/daenerystargaryen.jpg', reason: 'Stabbed to death by Jon Snow' }
            ]
      }
})
      /*jonName: 'Jon Snow',
avatarJon: 'https://tom.imgix.net/jonsnow.jpg',
sansaName: 'Sansa Stark',
avatarSansa: 'https://tom.imgix.net/sansastark.jpg',
aryaName: 'Arya Stark',
avatarArya: 'https://tom.imgix.net/aryastark.jpg',
branName: 'Bran Stark',
avatarBran: 'https://tom.imgix.net/branstark.jpg',
tyrionName: 'Tyrion Lannister',
avatarTyrion: 'https://tom.imgix.net/tyrionlannister.jpg',
daenerysName: 'Daenerys Targaryen',
avatarDaenerys: 'https://tom.imgix.net/daenerystargaryen.jpg',
greywormName: 'Greyworm',
avatarGreyworm: 'https://tom.imgix.net/greyworm.jpg',
yaraName: 'Yara Greyjoy',
avatarYara: 'https://tom.imgix.net/yaragreyjoy.jpg',
samwellName: 'Samwell Tarly',
avatarSamwell: 'https://tom.imgix.net/samwelltarly.jpg',
gillyName: 'Gilly',
avatarGilly: 'https://tom.imgix.net/gilly.jpg',
samName: 'Little Sam',
avatarSam: 'https://tom.imgix.net/sam.jpg',
hotpieName: 'Hot Pie',
avatarHotpie: 'https://tom.imgix.net/hotpie.jpg',
gendryName: 'Gendry',
avatarGendry: 'https://tom.imgix.net/gendry.jpg',
brienneName: 'Brienne of Tarth',
avatarBrienne: 'https://tom.imgix.net/briennetarth.jpg',
davosName: 'Davos Seaworth',
avatarDavos: 'https://tom.imgix.net/davosseaworth.jpg',
bronnName: 'Bronn',
avatarBronn: 'https://tom.imgix.net/bronn.jpg',
podrickName: 'Podrick Payne',
avatarPodrick: 'https://tom.imgix.net/podrickpayne.jpg',
tormandName: 'Tormand Giantsbane',
avatarTormund: 'https://tom.imgix.net/tormundgiantsbane.jpg',
meeraName: 'Meera Reed',
avatarMeera: 'https://tom.imgix.net/meerareed.jpg',
drogonName: 'Drogon',
avatarDrogon: 'https://tom.imgix.net/drogon.jpg?w=300&h=300&fit=crop&crop=entropy&auto=format,compress&mask=ellipse',
viserionName: 'Viserion',
avatarViserion: 'https://tom.imgix.net/viserion.jpg',
*/