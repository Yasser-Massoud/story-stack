import React, { Fragment } from 'react';

import Banner from '../components/Banner';
import Tdesc from '../components/Tdesc';

import './css/home.css'

function Home() {
	return (
		<Fragment>
			<Banner 
	          bannerHead="Welcome to Story Stack"
	          bannerBody="This is a practice project in React.js, I am using Hacker News API to get all stories from users. you can provide me feedback at yassermassoud000.com"
	        />
	        <div className="descRow">
	          <div className="descHeading">Technology</div>
	          <div className="descBody">
	            <Tdesc 
	              descImgLogo="reactlogo"
	              descName="React"
	              imgType="png"
	              descMain="This project is made in React.js to learn concepts of Front End development with it. React.js is JavaScript Framework."
	            />
	            <Tdesc 
	              descImgLogo="githublogo"
	              descName="GitHub"
	              imgType="png"
	              descMain="GitHub is a Git repository hosting service, but it adds many of its own features. While Git is a command line tool, GitHub provides a Web-based graphical interface."
	            />
	            <Tdesc 
	              descImgLogo="herokulogo"
	              descName="Heroku"
	              imgType="png"
	              descMain="Heroku is a cloud platform as a service. That means you do not have to worry about infrastructure; you just focus on your application"
	            />
	          </div>
	        </div>
	        <Banner 
	          bannerHead="API provider"
	          bannerBody="This project uses Hacker News API to fetch stories, users, comments from their database, Hacker News is free and a big API provider."
	        />
	        <div className="descRow">
	          <div className="descHeading">Tools</div>
	          <div className="descBody">
	            <Tdesc 
	              descImgLogo="vscodelogo"
	              descName="VsCode"
	              imgType="jpg"
	              descMain="Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git"
	            />
	            <Tdesc 
	              descImgLogo="googlelogo"
				  descName="Google chrom"
	              imgType="png"
	              descMain="Google Chrome is a cross-platform web browser developed by Google. It was first released in 2008 for Microsoft Windows, and was later ported to Linux, macOS, iOS, and Android where it is the default browser built into the OS."
	            />
	            <Tdesc 
	              descImgLogo="nodelogo"
	              descName="Node Package Manager"
	              imgType="png"
	              descMain="npm helps you install and manage the tools that come with Node, easily. It installs packages locally or globally and helps you manage dependencies"
	            />
	          </div>
	        </div>
	        <Banner 
	          bannerHead="About Developer"
	          bannerBody="hello my is yasser im a full stack javascript developer graduated from RBK a RebootKamp powred by HackRactor "
	        />
        </Fragment>
	)
}

export default Home;