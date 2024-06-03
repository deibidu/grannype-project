interface CrearIconGreyProps {
    className?: string;
}

export const CrearIconGrey = ({ className = '' }: CrearIconGreyProps) => (<svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fill: 'currentcolor' }}>
    <g clip-path="url(#clip0_457_763)">
        <mask id="mask0_457_763" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
            <path d="M12.5 22C18.023 22 22.5 17.523 22.5 12C22.5 6.477 18.023 2 12.5 2C6.977 2 2.5 6.477 2.5 12C2.5 17.523 6.977 22 12.5 22Z" fill="white" stroke="white" stroke-width="4" stroke-linejoin="round" />
            <path d="M12.5 8V16M8.5 12H16.5" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </mask>
        <g mask="url(#mask0_457_763)">
            <path d="M0.5 0H24.5V24H0.5V0Z" />
        </g>
    </g>
    <defs>
        <clipPath id="clip0_457_763">
            <rect width="24" height="24" fill="white" transform="translate(0.5)" />
        </clipPath>
    </defs>
</svg>
)
