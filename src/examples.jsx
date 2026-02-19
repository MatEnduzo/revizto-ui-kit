/**
 * Revizto UI — Usage Examples
 * ============================
 * Live demo of all components. Paste this into Lovable.dev or run locally.
 *
 * Usage:
 *   import Examples from './examples';
 *   // Then render <Examples /> in your app
 */

import { useState } from "react";
import {
  Button, Badge, StatusBadge, PriorityIcon, Avatar,
  Input, Select, Checkbox, Card, IssueCard, Tag, Alert,
  Spinner, Progress, Tabs, Modal, Tooltip, Table,
  SidebarItem, Divider, EmptyState, COLORS,
} from "./revizto-ui-tailwind";

// ─── SAMPLE DATA ─────────────────────────────────────────────────────────────
const SAMPLE_ISSUES = [
  {
    id: 1, issueNumber: 1042, title: "Clash detected in HVAC duct routing — Level 3 mechanical room",
    status: "open", priority: "critical", assignees: ["Alex Kim", "Sarah Chen"],
    tags: ["MEP", "Clash"], dueDate: "Jan 28",
  },
  {
    id: 2, issueNumber: 1041, title: "Missing fire-stop detail at beam penetration",
    status: "in-progress", priority: "high", assignees: ["Tom Rivera"],
    tags: ["Fire Safety"], dueDate: "Feb 3",
  },
  {
    id: 3, issueNumber: 1040, title: "Door swing conflict with equipment in server room 2B",
    status: "resolved", priority: "medium", assignees: ["Nina Patel", "Leo Zhang", "James O'Brien"],
    tags: ["Arch", "MEP"], dueDate: "Jan 20",
  },
  {
    id: 4, issueNumber: 1039, title: "Rebar spacing non-compliant per structural drawings",
    status: "closed", priority: "low", assignees: [],
    tags: ["Structural"], dueDate: null,
  },
];

const TABLE_COLUMNS = [
  { key: "issueNumber", label: "#", render: (v) => <span className="font-mono text-xs text-[#9E9E9E]">#{v}</span> },
  { key: "title", label: "Issue", render: (v) => <span className="text-[#F5F5F5] line-clamp-1">{v}</span> },
  { key: "status", label: "Status", render: (v) => <StatusBadge status={v} /> },
  { key: "priority", label: "Priority", render: (v) => <PriorityIcon priority={v} showLabel /> },
  {
    key: "assignees", label: "Assignees",
    render: (v) => (
      <div className="flex -space-x-1">
        {(v || []).slice(0, 3).map((a, i) => <Avatar key={i} name={a} size="xs" className="ring-1 ring-[#1E1E1E]" />)}
      </div>
    ),
  },
];

// ─── SECTION WRAPPER ─────────────────────────────────────────────────────────
function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-base font-semibold text-[#9E9E9E] uppercase tracking-widest mb-4 pb-2 border-b border-[#3D3D3D]">
        {title}
      </h2>
      {children}
    </section>
  );
}

// ─── MAIN EXAMPLES COMPONENT ─────────────────────────────────────────────────
export default function Examples() {
  const [activeTab, setActiveTab] = useState("issues");
  const [modalOpen, setModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [progress, setProgress] = useState(65);

  return (
    <div
      style={{ background: COLORS.bgDark, minHeight: "100vh", color: COLORS.text }}
      className="p-8 font-sans"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[#F5F5F5] mb-1">Revizto UI Components</h1>
          <p className="text-[#9E9E9E]">Full component library — React + Tailwind CSS</p>
        </div>

        {/* ── BUTTONS ── */}
        <Section title="Buttons">
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="primary" loading>Loading</Button>
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="lg">Large</Button>
            <Tooltip text="Icon button">
              <Button variant="icon">⚙</Button>
            </Tooltip>
          </div>
        </Section>

        {/* ── STATUS & BADGES ── */}
        <Section title="Status Badges">
          <div className="flex flex-wrap gap-2 items-center mb-3">
            {["open", "in-progress", "resolved", "closed", "new"].map((s) => (
              <StatusBadge key={s} status={s} />
            ))}
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <Badge>Default</Badge>
            <Badge color="red">Critical</Badge>
            <Badge color="green">Done</Badge>
            <Badge color="yellow">Pending</Badge>
            <Badge color="blue">Info</Badge>
          </div>
        </Section>

        {/* ── PRIORITY ── */}
        <Section title="Priority Icons">
          <div className="flex flex-wrap gap-4 items-center">
            {["critical", "high", "medium", "low", "none"].map((p) => (
              <PriorityIcon key={p} priority={p} showLabel />
            ))}
          </div>
        </Section>

        {/* ── AVATARS ── */}
        <Section title="Avatars">
          <div className="flex flex-wrap gap-3 items-center">
            {["Alex Kim", "Sarah Chen", "Tom Rivera", "Nina Patel"].map((name) => (
              <div key={name} className="flex flex-col items-center gap-1">
                <Avatar name={name} size="lg" />
                <span className="text-xs text-[#9E9E9E]">{name.split(" ")[0]}</span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-1">
              <div className="flex -space-x-2">
                {["Alex Kim", "Sarah Chen", "Tom Rivera"].map((n, i) => (
                  <Avatar key={i} name={n} size="md" className="ring-2 ring-[#121212]" />
                ))}
                <span className="w-8 h-8 flex items-center justify-center bg-[#3D3D3D] rounded-full text-xs text-[#9E9E9E] ring-2 ring-[#121212]">+5</span>
              </div>
              <span className="text-xs text-[#9E9E9E]">Group</span>
            </div>
          </div>
        </Section>

        {/* ── FORM INPUTS ── */}
        <Section title="Form Inputs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Issue Title"
              placeholder="Describe the issue..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <Input
              label="With Error"
              placeholder="Enter value..."
              error="This field is required"
              defaultValue="bad input"
            />
            <Input
              label="With Helper"
              placeholder="Search..."
              helper="Press Enter to search"
              prefix="🔍"
            />
            <Select
              label="Priority"
              options={[
                { value: "critical", label: "Critical" },
                { value: "high", label: "High" },
                { value: "medium", label: "Medium" },
                { value: "low", label: "Low" },
              ]}
            />
          </div>
          <div className="flex gap-4 mt-4">
            <Checkbox label="Assign to me" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
            <Checkbox label="Send notification" defaultChecked />
            <Checkbox label="Disabled" disabled />
          </div>
        </Section>

        {/* ── ALERTS ── */}
        <Section title="Alerts">
          <div className="flex flex-col gap-3">
            <Alert type="info" title="Sync in progress">Model update is being processed. This may take a few minutes.</Alert>
            <Alert type="success" title="Issue resolved">Issue #1040 was marked as resolved by Nina Patel.</Alert>
            <Alert type="warning" title="Due date approaching">5 issues are due within the next 48 hours.</Alert>
            <Alert type="error" title="Clash detected" onClose={() => {}}>
              Critical clash found in Zone B, Level 3. Immediate review required.
            </Alert>
          </div>
        </Section>

        {/* ── PROGRESS & SPINNER ── */}
        <Section title="Progress & Loading">
          <div className="flex flex-col gap-4 max-w-sm">
            <Progress value={progress} showLabel />
            <Progress value={35} color={COLORS.warning} showLabel />
            <Progress value={90} color={COLORS.success} showLabel />
            <div className="flex gap-3 items-center mt-2">
              <Button variant="secondary" size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>−10</Button>
              <Button variant="secondary" size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>+10</Button>
            </div>
          </div>
          <div className="flex gap-4 items-center mt-4">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner size="md" color={COLORS.success} />
            <Spinner size="md" color={COLORS.warning} />
          </div>
        </Section>

        {/* ── TABS ── */}
        <Section title="Tabs">
          <Tabs
            tabs={[
              { id: "issues", label: "Issues", count: 12 },
              { id: "resolved", label: "Resolved", count: 47 },
              { id: "closed", label: "Closed" },
              { id: "all", label: "All Issues", count: 59 },
            ]}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <div className="pt-4 text-sm text-[#9E9E9E]">
            Active tab: <span className="text-[#F5F5F5] font-medium">{activeTab}</span>
          </div>
        </Section>

        {/* ── ISSUE CARDS ── */}
        <Section title="Issue Cards">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SAMPLE_ISSUES.map((issue) => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </div>
        </Section>

        {/* ── TAGS ── */}
        <Section title="Tags">
          <div className="flex flex-wrap gap-2">
            {["MEP", "Structural", "Architecture", "Fire Safety", "Clash", "Review Needed", "Level 3"].map((t) => (
              <Tag key={t} onRemove={() => {}}>{t}</Tag>
            ))}
          </div>
        </Section>

        {/* ── TABLE ── */}
        <Section title="Data Table">
          <Table
            columns={TABLE_COLUMNS}
            rows={SAMPLE_ISSUES}
            emptyMessage="No issues found"
          />
        </Section>

        {/* ── CARD ── */}
        <Section title="Cards">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card header="Project Summary">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#9E9E9E]">Open Issues</span>
                  <span className="font-semibold text-[#EF233C]">12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#9E9E9E]">In Progress</span>
                  <span className="font-semibold text-[#FFB703]">5</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#9E9E9E]">Resolved</span>
                  <span className="font-semibold text-[#06D6A0]">47</span>
                </div>
                <Divider />
                <div className="flex justify-between text-sm">
                  <span className="text-[#9E9E9E]">Completion</span>
                  <span className="font-semibold">79%</span>
                </div>
                <Progress value={79} />
              </div>
            </Card>
            <Card header="Team Members" footer="Last updated 2 hours ago">
              <div className="space-y-3">
                {["Alex Kim", "Sarah Chen", "Tom Rivera", "Nina Patel"].map((name) => (
                  <div key={name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar name={name} size="sm" />
                      <span className="text-sm text-[#F5F5F5]">{name}</span>
                    </div>
                    <StatusBadge status="in-progress" label="Active" />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        {/* ── EMPTY STATE ── */}
        <Section title="Empty State">
          <Card>
            <EmptyState
              icon="📋"
              title="No issues found"
              description="All issues have been resolved, or none match your current filter."
              action={<Button variant="primary" size="sm">Create Issue</Button>}
            />
          </Card>
        </Section>

        {/* ── MODAL ── */}
        <Section title="Modal">
          <Button variant="primary" onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Create New Issue"
            footer={
              <>
                <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
                <Button variant="primary" onClick={() => setModalOpen(false)}>Create Issue</Button>
              </>
            }
          >
            <div className="flex flex-col gap-4">
              <Input label="Issue Title" placeholder="Describe the issue..." />
              <Select
                label="Priority"
                options={[
                  { value: "critical", label: "🔴 Critical" },
                  { value: "high", label: "🟠 High" },
                  { value: "medium", label: "🟡 Medium" },
                  { value: "low", label: "🟢 Low" },
                ]}
              />
              <Select
                label="Status"
                options={[
                  { value: "open", label: "Open" },
                  { value: "in-progress", label: "In Progress" },
                  { value: "resolved", label: "Resolved" },
                ]}
              />
              <Checkbox label="Assign to me" />
            </div>
          </Modal>
        </Section>

        {/* ── SIDEBAR ── */}
        <Section title="Sidebar Navigation">
          <div className="w-56 bg-[#1E1E1E] border border-[#3D3D3D] rounded-lg p-2 space-y-0.5">
            <SidebarItem icon="🏠" label="Dashboard" active />
            <SidebarItem icon="📋" label="Issues" badge={12} />
            <SidebarItem icon="✅" label="Resolved" badge={47} />
            <Divider className="my-1" />
            <SidebarItem icon="📊" label="Reports" />
            <SidebarItem icon="⚙" label="Settings" />
          </div>
        </Section>
      </div>
    </div>
  );
}
