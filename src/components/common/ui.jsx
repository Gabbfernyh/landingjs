import React from 'react'

export function Card({
    children,
    className = "",
    hover = true,
    ...props
}) {
    const hoverClass = hover ? "hover:-translate-y-2 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20" : ""
    return (
        <div
            className={`
        rounded-2xl 
        bg-slate-900/50 
        backdrop-blur-xl 
        border 
        border-cyan-500/20 
        transition-all 
        duration-300 
        ${hoverClass}
        ${className}
        `}
            {...props}
        >
            {children}
        </div>
    )
}

export function Badge({ children, variant = "default" }) {
    const variants = {
        default: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
        success: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
        warning: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    }

    return (
        <span className={`
        inline-block 
        px-3 
        py-1 
        rounded-full 
        text-sm 
        font-semibold 
        border 
        ${variants[variant]}
    `}>
            {children}
        </span>
    )
}
