import ProjectCard from './ui/ProjectCard'

export default function ProjectsSection() {
  const projects = [
    {
      title: "Loan & Credit Scoring Platform",
      tags: ["Laravel", "Multi‑tenancy", "Fintech"],
      desc: "MVP for SACCOs: member management, loans, repayments, and rule‑based credit scoring. Integrated reporting and subscription billing.",
      status: "WIP"
    },
    {
      title: "HR & Payroll SaaS",
      tags: ["Laravel", "M‑Pesa", "PDF payslips"],
      desc: "Employee management, attendance tracking, payslip generation and payroll runs for SMEs.",
      status: "WIP"
    },
    {
      title: "Workflow Automation & Approval Matrix",
      tags: ["Laravel/Livewire","Tailwind", "Approvals", "Audit Logs"],
      desc: "Configurable approval workflows for document routing and compliance.",
      status: "Completed"
    }
  ]

  return (
    <section id="projects" className="space-y-6">
      <h3 className="text-white text-2xl font-semibold">Selected Projects</h3>
      
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          tags={project.tags}
          desc={project.desc}
          status={project.status}
        />
      ))}
    </section>
  )
}