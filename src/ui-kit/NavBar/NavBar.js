import React, { useState } from 'react'
import { menuItems } from './MenuItems'
import './NavBar.css'
import { Button } from '../index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
	const [isDrawerExpanded, setIsDrawerExpanded] = useState(false)

	const handleHamburgerClick = () => {
		setIsDrawerExpanded(!isDrawerExpanded)
	}

	return (
		<nav className={'NavBarItems'}>
			<h1 className={'nav-bar-logo'}>TK</h1>

			<div className={'menu-icon'} onClick={handleHamburgerClick}>
				<FontAwesomeIcon
					icon={isDrawerExpanded ? faClose : faBars}
					className={'fa-bars'}
				/>
			</div>

			<ul className={isDrawerExpanded ? 'nav-menu active' : 'nav-menu'}>
				{menuItems.map((item, index) => (
					<li key={index.toString()}>
						<a className={item.clsName} href={item.URL}>
							{item.title}
						</a>
					</li>
				))}
			</ul>
			<Button>Download CV</Button>
		</nav>
	)
}

NavBar.propTypes = {}

export { NavBar }
