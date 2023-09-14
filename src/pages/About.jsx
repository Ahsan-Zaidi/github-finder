function About() {
    return (
      <>
        <h1 className='text-6xl mb-4'>Github Finder</h1>
        <p className='mb-4 text-2xl font-light'>
        This application is a GitHub profile search tool that empowers users to search for GitHub profiles. It offers users access to profile information such as recent repositories and the individuals they are following.
        </p>
        <p className='text-lg text-gray-400'>
          Version <span className='text-white'>1.0.0</span>
        </p>
        <p className='text-lg text-gray-400'>
          Layout By:{" "}
          <a className='text-white' href='https://github.com/Ahsan-Zaidi'>
            Ahsan Zaidi
          </a>
        </p>
      </>
    )
  }
  
  export default About