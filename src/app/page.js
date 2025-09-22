import HeroSection from './components/HeroSection'
// import SkillsSection from './components/'
// import ProjectsSection from './components/layout'
import ContactSection from './components/ContactSection'
import SkillsSection from './components/SkillSection'
import ProjectsSection from './components/ProjectSection'

export default function LandingPage() {
  return (
      <div className="space-y-12">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
  )
}