Vue.component('deathpool', {
      props: ['name', 'avatar', 'reason'],
      template: `
      <div class="indiv">
      <img :src="avatar"/>
      <h2>{{ name }}</h2>
      <h3>{{ reason }}</h3>
      </div>
      `
})

new Vue({
  el: '#app_deathpool',
  data: {
      characters: [
      { id: 1, name: 'Theon Greyjoy', avatar: 'https://tom.imgix.net/theongreyjoy.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse&fm=png', reason: 'Impaled by the Night King' },
      { id: 2, name: 'Jorah Mormont', avatar: 'https://tom.imgix.net/jorahmormont.png?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', reason: 'Killed by a swarm of whites'},
      { id: 3, name: 'Melisandre', avatar: 'https://tom.imgix.net/melisandre.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse&fm=png', reason: 'Died of old age'},
      { id: 4, name: 'Missandei', avatar: 'https://tom.imgix.net/missandei.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse&fm=png', reason: 'Beheaded by The Mountain'},
      { id: 5, name: 'Rhaegal', avatar: 'https://tom.imgix.net/rhaegal.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse&fm=png', reason: 'Killed by Euron & the iron fleet'}
      ]
  }
})
      /*jonName: 'Jon Snow', 
      avatarJon: 'https://tom.imgix.net/jonsnow.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
      sansaName: 'Sansa Stark', 
      avatarSansa: 'https://tom.imgix.net/sansastark.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
      aryaName: 'Arya Stark', 
      avatarArya: 'https://tom.imgix.net/aryastark.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
      branName: 'Bran Stark', 
      avatarBran: 'https://tom.imgix.net/branstark.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
      jaimeName: 'Jaime Lannister', 
      avatarJaime: 'https://tom.imgix.net/jaimelannister.png?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
      cerseiName: 'Cersei Lannister', 
      avatarCersei: 'https://tom.imgix.net/cersei.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
      tyrionName: 'Tyrion Lannister', 
      avatarTyrion: 'https://tom.imgix.net/tyrionlannister.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
      mountainName: 'The Mountain', 
      avatarMountain: 'https://tom.imgix.net/mountain.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
      daenerysName: 'Daenerys Targaryen', 
      avatarDaenerys: 'https://tom.imgix.net/daenerystargaryen.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
      missandeiName: 'Missandei', 
      avatarMissandei: 'https://tom.imgix.net/missandei.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse', 
      greywormName: 'Greyworm', 
      avatarGreyworm: 'https://tom.imgix.net/greyworm.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      euronName: 'Euron Greyjoy',
      avatarEuron: 'https://tom.imgix.net/eurongreyjoy.png?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      yaraName: 'Yara Greyjoy',
      avatarYara: 'https://tom.imgix.net/yaragreyjoy.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      theonName: 'Theon Greyjoy',
      avatarTheon: 'https://tom.imgix.net/theongreyjoy.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      jorahName: 'Jorah Mormont',
      avatarJorah: 'https://tom.imgix.net/jorahmormont.png?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      melisandreName: 'Melisandre',
      avatarMelisandre: 'https://tom.imgix.net/melisandre.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      samwellName: 'Samwell Tarly',
      avatarSamwell: 'https://tom.imgix.net/samwelltarly.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      gillyName: 'Gilly',
      avatarGilly: 'https://tom.imgix.net/gilly.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      samName: 'Little Sam',
      avatarSam: 'https://tom.imgix.net/sam.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      bericName: 'Beric Dondarrion',
      avatarBeric: 'https://tom.imgix.net/bericdondarrion.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      houndName: 'The Hound',
      avatarHound: 'https://tom.imgix.net/sandorclegane.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      hotpieName: 'Hot Pie',
      avatarHotpie: 'https://tom.imgix.net/hotpie.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      gendryName: 'Gendry',
      avatarGendry: 'https://tom.imgix.net/gendry.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      varysName: 'Varys',
      avatarVarys: 'https://tom.imgix.net/varys.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      brienneName: 'Brienne of Tarth',
      avatarBrienne: 'https://tom.imgix.net/briennetarth.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      davosName: 'Davos Seaworth',
      avatarDavos: 'https://tom.imgix.net/davosseaworth.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      bronnName: 'Bronn',
      avatarBronn: 'https://tom.imgix.net/bronn.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      podrickName: 'Podrick Payne',
      avatarPodrick: 'https://tom.imgix.net/podrickpayne.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      qyburnName: 'Qyburn',
      avatarQyburn: 'https://tom.imgix.net/qyburn.png?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      tormandName: 'Tormand Giantsbane',
      avatarTormund: 'https://tom.imgix.net/tormundgiantsbane.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      meeraName: 'Meera Reed',
      avatarMeera: 'https://tom.imgix.net/meerareed.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      nightkingName: 'The Night King',
      avatarNightking: 'https://tom.imgix.net/nightking.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      drogonName: 'Drogon',
      avatarDrogon: 'https://tom.imgix.net/drogon.jpg?w=300&h=300&fit=crop&crop=entropy&auto=format,compress&mask=ellipse',
      rhaegalName: 'Rhaegal',
      avatarRhaegal: 'https://tom.imgix.net/rhaegal.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      viserionName: 'Viserion',
      avatarViserion: 'https://tom.imgix.net/viserion.jpg?w=300&h=300&fit=facearea&facepad=1.7&auto=format,compress&mask=ellipse',
      */