/**
 * Revizto UI Components — Tailwind CSS Version
 * ============================================
 * Production-ready React component library built to match Revizto's design system.
 * Requires Tailwind CSS 3.x configured in your project.
 *
 * Usage in Lovable.dev:
 *   import { Button, Card, IssueCard, Badge } from './revizto-ui-tailwind';
 *
 * All components support className prop for additional overrides.
 */

import { useState, useRef, useEffect } from "react";

// ─── DESIGN TOKENS ──────────────────────────────────────────────────────────
export const COLORS = {
  primary: "#E63946",
  primaryHover: "#C1121F",
  bgDark: "#121212",
  surface: "#1E1E1E",
  surface2: "#2D2D2D",
  surface3: "#3D3D3D",
  border: "#3D3D3D",
  text: "#F5F5F5",
  textMuted: "#9E9E9E",
  success: "#06D6A0",
  warning: "#FFB703",
  error: "#EF233C",
  info: "#4CC9F0",
};

// ─── BUTTON ─────────────────────────────────────────────────────────────────
/**
 * Button component
 * @param {'primary'|'secondary'|'ghost'|'danger'|'icon'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {boolean} loading
 * @param {boolean} disabled
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  onClick,
  className = "",
  type = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#121212] disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[#E63946] hover:bg-[#C1121F] text-white focus:ring-[#E63946]",
    secondary:
      "bg-[#2D2D2D] hover:bg-[#3D3D3D] text-[#F5F5F5] border border-[#3D3D3D] focus:ring-[#3D3D3D]",
    ghost:
      "bg-transparent hover:bg-[#2D2D2D] text-[#F5F5F5] focus:ring-[#3D3D3D]",
    danger:
      "bg-[#EF233C] hover:bg-[#C1121F] text-white focus:ring-[#EF233C]",
    icon:
      "bg-transparent hover:bg-[#2D2D2D] text-[#9E9E9E] hover:text-[#F5F5F5] p-1.5 rounded focus:ring-[#3D3D3D]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${variant !== "icon" ? sizes[size] : ""} ${className}`}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
      )}
      {children}
    </button>
  );
}

// ─── BADGE / STATUS BADGE ───────────────────────────────────────────────────
const STATUS_STYLES = {
  open:        "bg-[#EF233C]/20 text-[#EF233C] border border-[#EF233C]/30",
  "in-progress":"bg-[#FFB703]/20 text-[#FFB703] border border-[#FFB703]/30",
  resolved:    "bg-[#06D6A0]/20 text-[#06D6A0] border border-[#06D6A0]/30",
  closed:      "bg-[#9E9E9E]/20 text-[#9E9E9E] border border-[#9E9E9E]/30",
  new:         "bg-[#4CC9F0]/20 text-[#4CC9F0] border border-[#4CC9F0]/30",
  info:        "bg-[#4CC9F0]/20 text-[#4CC9F0] border border-[#4CC9F0]/30",
  success:     "bg-[#06D6A0]/20 text-[#06D6A0] border border-[#06D6A0]/30",
  warning:     "bg-[#FFB703]/20 text-[#FFB703] border border-[#FFB703]/30",
  error:       "bg-[#EF233C]/20 text-[#EF233C] border border-[#EF233C]/30",
  default:     "bg-[#3D3D3D] text-[#F5F5F5] border border-[#3D3D3D]",
};

/**
 * StatusBadge — colored pill for issue status or label
 * @param {'open'|'in-progress'|'resolved'|'closed'|'new'|'info'|'success'|'warning'|'error'} status
 */
export function StatusBadge({ status = "default", label, className = "" }) {
  const style = STATUS_STYLES[status] || STATUS_STYLES.default;
  const text = label || status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ");
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${style} ${className}`}>
      {text}
    </span>
  );
}

/** Generic Badge */
export function Badge({ children, color = "default", className = "" }) {
  const colorMap = {
    default: "bg-[#3D3D3D] text-[#F5F5F5]",
    red: "bg-[#EF233C]/20 text-[#EF233C]",
    green: "bg-[#06D6A0]/20 text-[#06D6A0]",
    yellow: "bg-[#FFB703]/20 text-[#FFB703]",
    blue: "bg-[#4CC9F0]/20 text-[#4CC9F0]",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${colorMap[color] || colorMap.default} ${className}`}>
      {children}
    </span>
  );
}

// ─── PRIORITY ICON ──────────────────────────────────────────────────────────
const PRIORITY_CONFIG = {
  critical: { color: "text-[#EF233C]", label: "Critical", bars: 4 },
  high:     { color: "text-[#FF6B35]", label: "High",     bars: 3 },
  medium:   { color: "text-[#FFB703]", label: "Medium",   bars: 2 },
  low:      { color: "text-[#06D6A0]", label: "Low",      bars: 1 },
  none:     { color: "text-[#9E9E9E]", label: "None",     bars: 0 },
};

/**
 * PriorityIcon — signal-bars style priority indicator
 * @param {'critical'|'high'|'medium'|'low'|'none'} priority
 * @param {boolean} showLabel
 */
export function PriorityIcon({ priority = "none", showLabel = false, className = "" }) {
  const cfg = PRIORITY_CONFIG[priority] || PRIORITY_CONFIG.none;
  return (
    <span className={`inline-flex items-center gap-1.5 ${cfg.color} ${className}`}>
      <span className="flex items-end gap-px h-3.5">
        {[1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`w-1 rounded-sm transition-all ${i <= cfg.bars ? "opacity-100" : "opacity-25"}`}
            style={{ height: `${i * 3 + 2}px`, background: "currentColor" }}
          />
        ))}
      </span>
      {showLabel && <span className="text-xs font-medium">{cfg.label}</span>}
    </span>
  );
}

// ─── AVATAR ─────────────────────────────────────────────────────────────────
/**
 * Avatar — user avatar with image or initials fallback
 * @param {'xs'|'sm'|'md'|'lg'} size
 */
export function Avatar({ name, src, size = "md", className = "" }) {
  const sizes = { xs: "w-5 h-5 text-xs", sm: "w-7 h-7 text-xs", md: "w-8 h-8 text-sm", lg: "w-10 h-10 text-base" };
  const initials = name ? name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) : "?";
  const colors = ["bg-[#E63946]","bg-[#4CC9F0]","bg-[#06D6A0]","bg-[#FFB703]","bg-purple-500"];
  const color = colors[(name?.charCodeAt(0) || 0) % colors.length];

  return (
    <span className={`inline-flex items-center justify-center rounded-full overflow-hidden font-semibold text-white ${sizes[size]} ${src ? "" : color} ${className}`}>
      {src ? <img src={src} alt={name} className="w-full h-full object-cover" /> : initials}
    </span>
  );
}

// ─── INPUT ──────────────────────────────────────────────────────────────────
/**
 * Input — text field with label, placeholder, error state
 */
export function Input({
  label,
  error,
  helper,
  prefix,
  suffix,
  className = "",
  inputClassName = "",
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-[#F5F5F5]">{label}</label>
      )}
      <div className="relative flex items-center">
        {prefix && (
          <span className="absolute left-3 text-[#9E9E9E] text-sm">{prefix}</span>
        )}
        <input
          className={`w-full bg-[#2D2D2D] border rounded px-3 py-2 text-sm text-[#F5F5F5] placeholder-[#9E9E9E] outline-none transition-all
            focus:border-[#E63946] focus:ring-1 focus:ring-[#E63946]
            ${error ? "border-[#EF233C]" : "border-[#3D3D3D]"}
            ${prefix ? "pl-8" : ""}
            ${suffix ? "pr-8" : ""}
            ${inputClassName}`}
          {...props}
        />
        {suffix && (
          <span className="absolute right-3 text-[#9E9E9E] text-sm">{suffix}</span>
        )}
      </div>
      {error && <p className="text-xs text-[#EF233C]">{error}</p>}
      {helper && !error && <p className="text-xs text-[#9E9E9E]">{helper}</p>}
    </div>
  );
}

// ─── SELECT ─────────────────────────────────────────────────────────────────
/**
 * Select — dropdown with label and error state
 * @param {{ label: string, value: string }[]} options
 */
export function Select({ label, options = [], error, className = "", ...props }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-sm font-medium text-[#F5F5F5]">{label}</label>}
      <select
        className={`w-full bg-[#2D2D2D] border rounded px-3 py-2 text-sm text-[#F5F5F5] outline-none transition-all
          focus:border-[#E63946] focus:ring-1 focus:ring-[#E63946]
          ${error ? "border-[#EF233C]" : "border-[#3D3D3D]"}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-[#1E1E1E]">
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-[#EF233C]">{error}</p>}
    </div>
  );
}

// ─── CHECKBOX ───────────────────────────────────────────────────────────────
export function Checkbox({ label, checked, onChange, disabled, className = "" }) {
  return (
    <label className={`inline-flex items-center gap-2 cursor-pointer select-none ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="w-4 h-4 rounded bg-[#2D2D2D] border-[#3D3D3D] text-[#E63946] focus:ring-[#E63946] accent-[#E63946]"
      />
      {label && <span className="text-sm text-[#F5F5F5]">{label}</span>}
    </label>
  );
}

// ─── CARD ────────────────────────────────────────────────────────────────────
/**
 * Card — content container with optional header and footer
 */
export function Card({ children, header, footer, className = "", padding = true }) {
  return (
    <div className={`bg-[#1E1E1E] border border-[#3D3D3D] rounded-lg overflow-hidden ${className}`}>
      {header && (
        <div className="px-4 py-3 border-b border-[#3D3D3D] text-sm font-semibold text-[#F5F5F5]">
          {header}
        </div>
      )}
      <div className={padding ? "p-4" : ""}>{children}</div>
      {footer && (
        <div className="px-4 py-3 border-t border-[#3D3D3D] text-sm text-[#9E9E9E]">
          {footer}
        </div>
      )}
    </div>
  );
}

// ─── ISSUE CARD ─────────────────────────────────────────────────────────────
/**
 * IssueCard — Revizto-style issue/ticket card
 * @param {{ id, title, status, priority, assignees, tags, issueNumber, dueDate }} issue
 */
export function IssueCard({ issue = {}, onClick, className = "" }) {
  const {
    id,
    title = "Untitled Issue",
    status = "open",
    priority = "none",
    assignees = [],
    tags = [],
    issueNumber,
    dueDate,
  } = issue;

  return (
    <div
      onClick={onClick}
      className={`bg-[#1E1E1E] border border-[#3D3D3D] rounded-lg p-3 hover:border-[#E63946]/50 hover:bg-[#2D2D2D] transition-all cursor-pointer ${className}`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2 flex-wrap">
          {issueNumber && (
            <span className="text-xs text-[#9E9E9E] font-mono">#{issueNumber}</span>
          )}
          <StatusBadge status={status} />
          <PriorityIcon priority={priority} />
        </div>
        {/* Assignees */}
        <div className="flex -space-x-1.5">
          {assignees.slice(0, 3).map((a, i) => (
            <Avatar key={i} name={a} size="xs" className="ring-1 ring-[#1E1E1E]" />
          ))}
          {assignees.length > 3 && (
            <span className="w-5 h-5 rounded-full bg-[#3D3D3D] text-[#9E9E9E] text-xs flex items-center justify-center ring-1 ring-[#1E1E1E]">
              +{assignees.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <p className="text-sm font-medium text-[#F5F5F5] line-clamp-2 mb-2">{title}</p>

      {/* Bottom row */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, i) => (
            <Tag key={i} size="xs">{tag}</Tag>
          ))}
        </div>
        {dueDate && (
          <span className="text-xs text-[#9E9E9E] whitespace-nowrap">{dueDate}</span>
        )}
      </div>
    </div>
  );
}

// ─── TAG ─────────────────────────────────────────────────────────────────────
export function Tag({ children, onRemove, size = "sm", className = "" }) {
  const sizes = { xs: "px-1.5 py-px text-xs", sm: "px-2 py-0.5 text-xs", md: "px-3 py-1 text-sm" };
  return (
    <span className={`inline-flex items-center gap-1 bg-[#2D2D2D] border border-[#3D3D3D] text-[#9E9E9E] rounded ${sizes[size]} ${className}`}>
      {children}
      {onRemove && (
        <button onClick={onRemove} className="hover:text-[#F5F5F5] transition-colors leading-none ml-0.5">×</button>
      )}
    </span>
  );
}

// ─── ALERT ───────────────────────────────────────────────────────────────────
const ALERT_STYLES = {
  info:    "bg-[#4CC9F0]/10 border-[#4CC9F0]/30 text-[#4CC9F0]",
  success: "bg-[#06D6A0]/10 border-[#06D6A0]/30 text-[#06D6A0]",
  warning: "bg-[#FFB703]/10 border-[#FFB703]/30 text-[#FFB703]",
  error:   "bg-[#EF233C]/10 border-[#EF233C]/30 text-[#EF233C]",
};
const ALERT_ICONS = {
  info:    "ℹ",
  success: "✓",
  warning: "⚠",
  error:   "✕",
};

/**
 * Alert — inline notification banner
 * @param {'info'|'success'|'warning'|'error'} type
 */
export function Alert({ type = "info", title, children, onClose, className = "" }) {
  return (
    <div className={`flex items-start gap-3 p-3 rounded-lg border ${ALERT_STYLES[type]} ${className}`}>
      <span className="text-base leading-none mt-0.5 font-bold">{ALERT_ICONS[type]}</span>
      <div className="flex-1 min-w-0">
        {title && <p className="text-sm font-semibold">{title}</p>}
        {children && <p className="text-sm opacity-90">{children}</p>}
      </div>
      {onClose && (
        <button onClick={onClose} className="opacity-60 hover:opacity-100 transition-opacity text-lg leading-none">×</button>
      )}
    </div>
  );
}

// ─── SPINNER ─────────────────────────────────────────────────────────────────
/**
 * Spinner — loading indicator
 * @param {'sm'|'md'|'lg'} size
 */
export function Spinner({ size = "md", color = "#E63946", className = "" }) {
  const sizes = { sm: "w-4 h-4", md: "w-6 h-6", lg: "w-8 h-8" };
  return (
    <svg
      className={`animate-spin ${sizes[size]} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      style={{ color }}
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z" />
    </svg>
  );
}

// ─── PROGRESS ────────────────────────────────────────────────────────────────
/**
 * Progress — linear progress bar
 * @param {number} value 0–100
 */
export function Progress({ value = 0, showLabel = false, color = "#E63946", className = "" }) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex-1 bg-[#3D3D3D] rounded-full overflow-hidden h-1.5">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${clamped}%`, background: color }}
        />
      </div>
      {showLabel && <span className="text-xs text-[#9E9E9E] w-8 text-right">{clamped}%</span>}
    </div>
  );
}

// ─── TABS ────────────────────────────────────────────────────────────────────
/**
 * Tabs — tab navigation
 * @param {{ id: string, label: string, count?: number }[]} tabs
 */
export function Tabs({ tabs = [], activeTab, onTabChange, className = "" }) {
  return (
    <div className={`flex border-b border-[#3D3D3D] ${className}`}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange?.(tab.id)}
            className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px
              ${isActive
                ? "border-[#E63946] text-[#F5F5F5]"
                : "border-transparent text-[#9E9E9E] hover:text-[#F5F5F5] hover:border-[#3D3D3D]"
              }`}
          >
            {tab.label}
            {tab.count != null && (
              <Badge color="default" className="ml-1.5">{tab.count}</Badge>
            )}
          </button>
        );
      })}
    </div>
  );
}

// ─── MODAL ────────────────────────────────────────────────────────────────────
/**
 * Modal — dialog overlay
 */
export function Modal({ isOpen, onClose, title, children, footer, size = "md", className = "" }) {
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose?.();
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizes = { sm: "max-w-sm", md: "max-w-lg", lg: "max-w-2xl", xl: "max-w-4xl" };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Dialog */}
      <div className={`relative bg-[#1E1E1E] border border-[#3D3D3D] rounded-xl w-full ${sizes[size]} shadow-2xl ${className}`}>
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#3D3D3D]">
            <h2 className="text-base font-semibold text-[#F5F5F5]">{title}</h2>
            <Button variant="icon" onClick={onClose} aria-label="Close">
              ✕
            </Button>
          </div>
        )}
        {/* Body */}
        <div className="px-5 py-4">{children}</div>
        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-2 px-5 py-4 border-t border-[#3D3D3D]">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── TOOLTIP ─────────────────────────────────────────────────────────────────
export function Tooltip({ children, text, position = "top", className = "" }) {
  const [visible, setVisible] = useState(false);
  const posMap = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-1.5",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-1.5",
    left: "right-full top-1/2 -translate-y-1/2 mr-1.5",
    right: "left-full top-1/2 -translate-y-1/2 ml-1.5",
  };
  return (
    <span
      className={`relative inline-flex ${className}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && text && (
        <span className={`absolute z-50 whitespace-nowrap bg-[#3D3D3D] text-[#F5F5F5] text-xs px-2 py-1 rounded pointer-events-none ${posMap[position]}`}>
          {text}
        </span>
      )}
    </span>
  );
}

// ─── TABLE ────────────────────────────────────────────────────────────────────
/**
 * Table — sortable data table
 * @param {{ key: string, label: string, render?: (val, row) => ReactNode }[]} columns
 * @param {object[]} rows
 */
export function Table({ columns = [], rows = [], onRowClick, emptyMessage = "No data", className = "" }) {
  return (
    <div className={`w-full overflow-x-auto rounded-lg border border-[#3D3D3D] ${className}`}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#3D3D3D] bg-[#2D2D2D]">
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-2.5 text-left text-xs font-semibold text-[#9E9E9E] uppercase tracking-wide whitespace-nowrap">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-8 text-center text-[#9E9E9E] text-sm">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            rows.map((row, i) => (
              <tr
                key={row.id || i}
                onClick={() => onRowClick?.(row)}
                className={`border-b border-[#3D3D3D]/50 transition-colors ${onRowClick ? "cursor-pointer hover:bg-[#2D2D2D]" : ""}`}
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 text-[#F5F5F5]">
                    {col.render ? col.render(row[col.key], row) : row[col.key] ?? "—"}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

// ─── SIDEBAR NAV ITEM ────────────────────────────────────────────────────────
export function SidebarItem({ icon, label, active, badge, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all
        ${active
          ? "bg-[#E63946]/15 text-[#E63946]"
          : "text-[#9E9E9E] hover:bg-[#2D2D2D] hover:text-[#F5F5F5]"
        } ${className}`}
    >
      {icon && <span className="text-base leading-none w-4 text-center">{icon}</span>}
      <span className="flex-1 text-left">{label}</span>
      {badge != null && (
        <Badge color={active ? "red" : "default"}>{badge}</Badge>
      )}
    </button>
  );
}

// ─── DIVIDER ─────────────────────────────────────────────────────────────────
export function Divider({ label, className = "" }) {
  if (!label) return <hr className={`border-[#3D3D3D] ${className}`} />;
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-1 border-t border-[#3D3D3D]" />
      <span className="text-xs text-[#9E9E9E] whitespace-nowrap">{label}</span>
      <div className="flex-1 border-t border-[#3D3D3D]" />
    </div>
  );
}

// ─── EMPTY STATE ─────────────────────────────────────────────────────────────
export function EmptyState({ icon = "📭", title = "Nothing here", description, action, className = "" }) {
  return (
    <div className={`flex flex-col items-center justify-center py-12 px-6 text-center ${className}`}>
      <div className="text-4xl mb-3">{icon}</div>
      <p className="text-base font-semibold text-[#F5F5F5] mb-1">{title}</p>
      {description && <p className="text-sm text-[#9E9E9E] mb-4 max-w-xs">{description}</p>}
      {action}
    </div>
  );
}

// ─── DEFAULT EXPORT (all components) ─────────────────────────────────────────
export default {
  Button,
  Badge,
  StatusBadge,
  PriorityIcon,
  Avatar,
  Input,
  Select,
  Checkbox,
  Card,
  IssueCard,
  Tag,
  Alert,
  Spinner,
  Progress,
  Tabs,
  Modal,
  Tooltip,
  Table,
  SidebarItem,
  Divider,
  EmptyState,
  COLORS,
};
