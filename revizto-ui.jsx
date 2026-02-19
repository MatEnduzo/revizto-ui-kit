/**
 * Revizto UI Components — Inline Styles Version
 * ==============================================
 * Same components as revizto-ui-tailwind.jsx but using inline styles.
 * Use this when Tailwind CSS is NOT configured in your project.
 *
 * Usage:
 *   import { Button, Card, IssueCard } from './revizto-ui';
 */

import { useState, useEffect } from "react";

// ─── DESIGN TOKENS ──────────────────────────────────────────────────────────
export const theme = {
  colors: {
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
  },
  radius: { sm: "4px", md: "8px", lg: "12px", full: "9999px" },
  font: { xs: "11px", sm: "13px", base: "14px", md: "15px" },
};

const c = theme.colors;

// ─── BUTTON ─────────────────────────────────────────────────────────────────
export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  onClick,
  style = {},
  ...props
}) {
  const [hovered, setHovered] = useState(false);

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    fontWeight: 500,
    borderRadius: theme.radius.sm,
    border: "none",
    cursor: disabled || loading ? "not-allowed" : "pointer",
    opacity: disabled || loading ? 0.5 : 1,
    transition: "background 0.15s, opacity 0.15s",
    fontFamily: "inherit",
  };

  const variants = {
    primary: { background: hovered ? c.primaryHover : c.primary, color: "#fff" },
    secondary: { background: hovered ? c.surface3 : c.surface2, color: c.text, border: `1px solid ${c.border}` },
    ghost: { background: hovered ? c.surface2 : "transparent", color: c.text },
    danger: { background: hovered ? c.primaryHover : c.error, color: "#fff" },
    icon: { background: hovered ? c.surface2 : "transparent", color: c.textMuted, padding: "6px", borderRadius: theme.radius.sm },
  };

  const sizes = {
    sm: { padding: "6px 12px", fontSize: theme.font.xs },
    md: { padding: "8px 16px", fontSize: theme.font.sm },
    lg: { padding: "12px 24px", fontSize: theme.font.base },
  };

  return (
    <button
      style={{ ...base, ...variants[variant], ...(variant !== "icon" ? sizes[size] : {}), ...style }}
      disabled={disabled || loading}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {loading && (
        <span style={{ width: 14, height: 14, border: "2px solid currentColor", borderTopColor: "transparent", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
      )}
      {children}
    </button>
  );
}

// ─── STATUS BADGE ────────────────────────────────────────────────────────────
const STATUS_COLORS = {
  open: { bg: "rgba(239,35,60,0.15)", color: c.error, border: "rgba(239,35,60,0.3)" },
  "in-progress": { bg: "rgba(255,183,3,0.15)", color: c.warning, border: "rgba(255,183,3,0.3)" },
  resolved: { bg: "rgba(6,214,160,0.15)", color: c.success, border: "rgba(6,214,160,0.3)" },
  closed: { bg: "rgba(158,158,158,0.15)", color: c.textMuted, border: "rgba(158,158,158,0.3)" },
  new: { bg: "rgba(76,201,240,0.15)", color: c.info, border: "rgba(76,201,240,0.3)" },
  info: { bg: "rgba(76,201,240,0.15)", color: c.info, border: "rgba(76,201,240,0.3)" },
  success: { bg: "rgba(6,214,160,0.15)", color: c.success, border: "rgba(6,214,160,0.3)" },
  warning: { bg: "rgba(255,183,3,0.15)", color: c.warning, border: "rgba(255,183,3,0.3)" },
  error: { bg: "rgba(239,35,60,0.15)", color: c.error, border: "rgba(239,35,60,0.3)" },
  default: { bg: c.surface2, color: c.text, border: c.border },
};

export function StatusBadge({ status = "default", label }) {
  const s = STATUS_COLORS[status] || STATUS_COLORS.default;
  const text = label || status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ");
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: "2px 8px", borderRadius: theme.radius.full,
      fontSize: theme.font.xs, fontWeight: 500,
      background: s.bg, color: s.color, border: `1px solid ${s.border}`,
    }}>
      {text}
    </span>
  );
}

// ─── PRIORITY ICON ───────────────────────────────────────────────────────────
const PRIORITY_COLORS = {
  critical: "#EF233C", high: "#FF6B35", medium: "#FFB703", low: "#06D6A0", none: "#9E9E9E",
};
const PRIORITY_BARS = { critical: 4, high: 3, medium: 2, low: 1, none: 0 };

export function PriorityIcon({ priority = "none", showLabel = false }) {
  const color = PRIORITY_COLORS[priority] || PRIORITY_COLORS.none;
  const bars = PRIORITY_BARS[priority] ?? 0;
  const labels = { critical: "Critical", high: "High", medium: "Medium", low: "Low", none: "None" };
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color }}>
      <span style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 14 }}>
        {[1, 2, 3, 4].map((i) => (
          <span key={i} style={{
            width: 4, height: i * 3 + 2,
            background: color, borderRadius: 2,
            opacity: i <= bars ? 1 : 0.25,
          }} />
        ))}
      </span>
      {showLabel && <span style={{ fontSize: theme.font.xs, fontWeight: 500 }}>{labels[priority]}</span>}
    </span>
  );
}

// ─── AVATAR ──────────────────────────────────────────────────────────────────
const AVATAR_COLORS = [c.primary, c.info, c.success, c.warning, "#9B59B6"];
const AVATAR_SIZES = { xs: 20, sm: 28, md: 32, lg: 40 };

export function Avatar({ name, src, size = "md" }) {
  const px = AVATAR_SIZES[size] || 32;
  const initials = name ? name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) : "?";
  const color = AVATAR_COLORS[(name?.charCodeAt(0) || 0) % AVATAR_COLORS.length];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: px, height: px, borderRadius: "50%", overflow: "hidden",
      background: src ? "transparent" : color, color: "#fff",
      fontSize: px * 0.35, fontWeight: 600,
    }}>
      {src ? <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : initials}
    </span>
  );
}

// ─── INPUT ───────────────────────────────────────────────────────────────────
export function Input({ label, error, helper, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {label && <label style={{ fontSize: theme.font.sm, fontWeight: 500, color: c.text }}>{label}</label>}
      <input
        style={{
          background: c.surface2, border: `1px solid ${focused ? c.primary : error ? c.error : c.border}`,
          borderRadius: theme.radius.sm, padding: "8px 12px",
          fontSize: theme.font.sm, color: c.text, outline: "none",
          boxShadow: focused ? `0 0 0 2px ${c.primary}33` : "none",
          transition: "border-color 0.15s, box-shadow 0.15s",
          fontFamily: "inherit",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
      {error && <p style={{ fontSize: theme.font.xs, color: c.error }}>{error}</p>}
      {helper && !error && <p style={{ fontSize: theme.font.xs, color: c.textMuted }}>{helper}</p>}
    </div>
  );
}

// ─── CARD ────────────────────────────────────────────────────────────────────
export function Card({ children, header, footer, style = {} }) {
  return (
    <div style={{
      background: c.surface, border: `1px solid ${c.border}`,
      borderRadius: theme.radius.lg, overflow: "hidden", ...style,
    }}>
      {header && (
        <div style={{ padding: "12px 16px", borderBottom: `1px solid ${c.border}`, fontSize: theme.font.sm, fontWeight: 600, color: c.text }}>
          {header}
        </div>
      )}
      <div style={{ padding: 16 }}>{children}</div>
      {footer && (
        <div style={{ padding: "12px 16px", borderTop: `1px solid ${c.border}`, fontSize: theme.font.sm, color: c.textMuted }}>
          {footer}
        </div>
      )}
    </div>
  );
}

// ─── ISSUE CARD ──────────────────────────────────────────────────────────────
export function IssueCard({ issue = {}, onClick }) {
  const [hovered, setHovered] = useState(false);
  const { title = "Untitled", status = "open", priority = "none", assignees = [], tags = [], issueNumber, dueDate } = issue;
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? c.surface2 : c.surface,
        border: `1px solid ${hovered ? c.primary + "80" : c.border}`,
        borderRadius: theme.radius.md, padding: 12,
        cursor: "pointer", transition: "all 0.15s",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 8, gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
          {issueNumber && <span style={{ fontSize: theme.font.xs, color: c.textMuted, fontFamily: "monospace" }}>#{issueNumber}</span>}
          <StatusBadge status={status} />
          <PriorityIcon priority={priority} />
        </div>
        <div style={{ display: "flex" }}>
          {assignees.slice(0, 3).map((a, i) => (
            <span key={i} style={{ marginLeft: i === 0 ? 0 : -6, zIndex: assignees.length - i }}>
              <Avatar name={a} size="xs" />
            </span>
          ))}
        </div>
      </div>
      <p style={{ fontSize: theme.font.sm, fontWeight: 500, color: c.text, marginBottom: 8, lineHeight: 1.4 }}>{title}</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 4 }}>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {tags.map((tag, i) => (
            <span key={i} style={{
              padding: "1px 6px", fontSize: theme.font.xs,
              background: c.surface2, border: `1px solid ${c.border}`,
              borderRadius: theme.radius.sm, color: c.textMuted,
            }}>{tag}</span>
          ))}
        </div>
        {dueDate && <span style={{ fontSize: theme.font.xs, color: c.textMuted, whiteSpace: "nowrap" }}>{dueDate}</span>}
      </div>
    </div>
  );
}

// ─── ALERT ───────────────────────────────────────────────────────────────────
const ALERT_CFG = {
  info:    { bg: "rgba(76,201,240,0.1)", border: "rgba(76,201,240,0.3)", color: c.info,    icon: "ℹ" },
  success: { bg: "rgba(6,214,160,0.1)",  border: "rgba(6,214,160,0.3)",  color: c.success, icon: "✓" },
  warning: { bg: "rgba(255,183,3,0.1)",  border: "rgba(255,183,3,0.3)",  color: c.warning, icon: "⚠" },
  error:   { bg: "rgba(239,35,60,0.1)",  border: "rgba(239,35,60,0.3)",  color: c.error,   icon: "✕" },
};

export function Alert({ type = "info", title, children, onClose }) {
  const cfg = ALERT_CFG[type] || ALERT_CFG.info;
  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: 12, padding: 12,
      borderRadius: theme.radius.md, border: `1px solid ${cfg.border}`,
      background: cfg.bg, color: cfg.color,
    }}>
      <span style={{ fontWeight: "bold", lineHeight: 1, marginTop: 2 }}>{cfg.icon}</span>
      <div style={{ flex: 1 }}>
        {title && <p style={{ fontSize: theme.font.sm, fontWeight: 600, marginBottom: children ? 2 : 0 }}>{title}</p>}
        {children && <p style={{ fontSize: theme.font.sm, opacity: 0.9 }}>{children}</p>}
      </div>
      {onClose && <button onClick={onClose} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", fontSize: 18, lineHeight: 1, opacity: 0.7 }}>×</button>}
    </div>
  );
}

// ─── MODAL ───────────────────────────────────────────────────────────────────
export function Modal({ isOpen, onClose, title, children, footer, size = "md" }) {
  useEffect(() => {
    const h = (e) => e.key === "Escape" && onClose?.();
    if (isOpen) document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  const maxW = { sm: 400, md: 540, lg: 720, xl: 900 }[size] || 540;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }} />
      <div style={{
        position: "relative", background: c.surface, border: `1px solid ${c.border}`,
        borderRadius: theme.radius.lg, width: "100%", maxWidth: maxW, boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
      }}>
        {title && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: `1px solid ${c.border}` }}>
            <span style={{ fontSize: theme.font.base, fontWeight: 600, color: c.text }}>{title}</span>
            <Button variant="icon" onClick={onClose}>✕</Button>
          </div>
        )}
        <div style={{ padding: "16px 20px" }}>{children}</div>
        {footer && (
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, padding: "12px 20px", borderTop: `1px solid ${c.border}` }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── SPINNER ─────────────────────────────────────────────────────────────────
export function Spinner({ size = "md", color = c.primary }) {
  const px = { sm: 16, md: 24, lg: 32 }[size] || 24;
  return (
    <span style={{
      display: "inline-block", width: px, height: px,
      border: `3px solid ${color}40`, borderTopColor: color,
      borderRadius: "50%", animation: "spin 0.7s linear infinite",
    }} />
  );
}

// ─── PROGRESS ────────────────────────────────────────────────────────────────
export function Progress({ value = 0, showLabel = false, color = c.primary }) {
  const v = Math.min(100, Math.max(0, value));
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ flex: 1, background: c.surface3, borderRadius: 999, overflow: "hidden", height: 6 }}>
        <div style={{ height: "100%", width: `${v}%`, background: color, borderRadius: 999, transition: "width 0.3s" }} />
      </div>
      {showLabel && <span style={{ fontSize: theme.font.xs, color: c.textMuted, minWidth: 32, textAlign: "right" }}>{v}%</span>}
    </div>
  );
}

export default { Button, StatusBadge, PriorityIcon, Avatar, Input, Card, IssueCard, Alert, Modal, Spinner, Progress, theme };
