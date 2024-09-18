import React from 'react'
import Header from '../components/Header'
import Carousel from 'react-bootstrap/Carousel';




function About() {
  return (
    <>
      <div>
        <h3 className='text-center mt-5 mb-5 home' style={{fontSize:'28px'}}>Hi, I am your Superhero. You can share me your grievances. I will help you to resolve </h3>
        <Header/>
       <div className='row mt-5 ms-2 me-2'>
        <div className="col-md-1"></div>
        <div className="col-md-10"><p style={{fontSize:'18px', color:'grey'}}>
        I was born on the alien planet Krypton.My parents, Jor-El and Lara become aware of Krypton's impending destruction and Jor-El begins constructing a spacecraft to carry Kal-El to Earth. During Krypton's last moments, Jor-El places young Kal-El in the spacecraft and launches it. Jor-El and Lara die as the spacecraft barely escapes Krypton's fate. The explosion transforms planetary debris into kryptonite, a radioactive substance that is lethal to superpowered (via Earth's yellow sun) Kryptonians.
  
            The spacecraft lands in the rural United States, where it is found by a passing motorist. Jonathan and Martha Kent adopt me and named as Clark Kent. As i grows up on Earth, me and my adoptive parents discover that i has superhuman powers. The Kents teach me to use these powers responsibly to help others and fight crime.
  
            I kept my powers secret in order to protect my family and friends, who might be endangered by my criminal enemies. In order to use my powers to help humanity, I created the alter ego of Superman. A number of elements are added to each identity to keep them distinct enough to prevent the casual observer from matching them. I wears a characteristic red and blue costume with a letter "S" emblem and a cape. I take to wearing glasses, styling his hair differently, changing his body language, significantly altering his voice, and wearing looser clothing and suits that hide his physique.I moved to Metropolis and takes a job as a reporter at the Daily Planet, where i met my friends and co-workers, Lois Lane, Jimmy Olsen and editor Perry White.</p></div>
          
          <div className="col-md-1"></div>
       </div>
       <div className="row mt-5 ms-2 me-2">
       <Carousel>
      <Carousel.Item interval={1000}>
      <img src="https://th.bing.com/th/id/R.353ef13c53b57592af78a78152165eff?rik=qesAwgV7QN%2b46A&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f5%2f9%2fc%2f981243-free-superman-hd-wallpapers-1920x1080-screen.jpg&ehk=h0AtoYZu8fdRpjBhmu9%2fAUa%2bueebyJ0wSHSDjyDJ3oc%3d&risl=&pid=ImgRaw&r=0" alt="no image" width={'100%'} height={'500vh'}/>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="https://images.hdqwalls.com/wallpapers/superman-2020-07.jpg" alt="no image" width={'100%'} height={'500vh'}/>
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://th.bing.com/th/id/R.34924e1f09478853c574839b561b2912?rik=6sfbLAemkjpjfQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fd%2fe%2f6%2f526228.jpg&ehk=b4p3KUD5Qlh0tg8VV7zu102vV%2f4V%2fP5KSzPpca4svM0%3d&risl=&pid=ImgRaw&r=0" alt="no image" width={'100%'} height={'500vh'}/>
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://img.freepik.com/premium-photo/superman-ai-generated-3d-rendered-superhero-gaming-avatars-cinematic-posters_926450-17.jpg?w=740" alt="no image" width={'100%'} height={'500vh'}/>
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://staticg.sportskeeda.com/editor/2023/03/6c1d7-16777472459464-1920.jpg?w=1200" alt="no image" width={'100%'} height={'500vh'}/>
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://rare-gallery.com/thumbnail/87490-superman-superheroes-artwork-artist-hd-4k.jpg" alt="no image" width={'100%'} height={'500vh'}/>
      </Carousel.Item>

    </Carousel>
       </div>
      </div>
    </>
  )
}

export default About