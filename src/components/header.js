import Link from 'next/link'
import Image from "next/Image"

function header() {
    return (
      <div className="App">
           <header className="container-fluid">
		        <div className="row">
                    <div>
                        <Link href="/" className="w-72 lg:w-full flex justify-center mx-auto my-20">
                          <Image src="/logo.svg" width="500" height="500" alt="logo"/>
                        </Link>
                    </div>	
		        </div>
	        </header>
      </div>
  );
}

export default header;