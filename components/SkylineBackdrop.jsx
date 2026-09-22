// components/SkylineBackdrop.jsx
// A single continuous line-art skyline blending landmarks of
// Chennai (temple gopuram, lighthouse, Napier Bridge),
// Muscat (Sultan Qaboos Grand Mosque, Mutrah Fort, Al Hajar mountains),
// Paris (Eiffel Tower),
// and Dubai (Burj Al Arab, Burj Khalifa, towers).
export default function SkylineBackdrop() {
  const S = {
    fill: 'none',
    stroke: '#151515',
    strokeWidth: 2,
    strokeLinejoin: 'round',
    strokeLinecap: 'round'
  };
  return (
    <div className="skyline" aria-hidden="true">
      <svg viewBox="0 0 1200 240" preserveAspectRatio="xMidYMax meet">
        {/* ground */}
        <line x1="0" y1="222" x2="1200" y2="222" stroke="#151515" strokeWidth="1.5" opacity="0.55" />

        {/* ===== CHENNAI ===== */}
        <g {...S}>
          {/* Lighthouse */}
          <path d="M60,222 L62,150 L78,150 L80,222" />
          <path d="M60,150 L60,140 L80,140 L80,150" />
          <line x1="57" y1="140" x2="83" y2="140" />
          <path d="M62,140 L70,128 L78,140" />
          <line x1="70" y1="128" x2="70" y2="121" />
          <line x1="63" y1="176" x2="77" y2="176" />
          <line x1="61" y1="200" x2="79" y2="200" />
          {/* Kapaleeshwarar-style gopuram */}
          <path d="M118,222 L150,120 L230,120 L262,222" />
          <path d="M150,120 Q190,96 230,120" />
          <line x1="165" y1="110" x2="165" y2="103" />
          <circle cx="165" cy="100" r="2.4" />
          <line x1="190" y1="106" x2="190" y2="96" />
          <circle cx="190" cy="93" r="2.4" />
          <line x1="215" y1="110" x2="215" y2="103" />
          <circle cx="215" cy="100" r="2.4" />
          <line x1="141" y1="150" x2="239" y2="150" />
          <line x1="133" y1="176" x2="247" y2="176" />
          <line x1="126" y1="200" x2="254" y2="200" />
          {/* Napier Bridge arches */}
          <line x1="288" y1="208" x2="382" y2="208" />
          <path d="M292,208 Q305,195 318,208" />
          <path d="M322,208 Q335,195 348,208" />
          <path d="M352,208 Q365,195 378,208" />
          <line x1="292" y1="208" x2="292" y2="222" />
          <line x1="318" y1="208" x2="318" y2="222" />
          <line x1="348" y1="208" x2="348" y2="222" />
          <line x1="378" y1="208" x2="378" y2="222" />
        </g>

        {/* ===== MUSCAT ===== */}
        <g {...S} opacity="0.65">
          {/* Al Hajar mountains */}
          <path d="M405,178 L442,138 L472,162 L502,126 L542,160 L578,132 L612,162 L648,146 L682,166" />
        </g>
        <g {...S}>
          {/* Sultan Qaboos Grand Mosque */}
          <path d="M515,222 L515,165 L605,165 L605,222" />
          <path d="M515,165 Q515,120 560,120 Q605,120 605,165" />
          <line x1="560" y1="120" x2="560" y2="104" />
          <circle cx="560" cy="101" r="2.6" />
          {/* flanking minarets */}
          <path d="M492,222 L492,135 L504,135 L504,222" />
          <line x1="489" y1="150" x2="507" y2="150" />
          <path d="M492,135 L498,118 L504,135" />
          <line x1="498" y1="118" x2="498" y2="110" />
          <path d="M616,222 L616,135 L628,135 L628,222" />
          <line x1="613" y1="150" x2="631" y2="150" />
          <path d="M616,135 L622,118 L628,135" />
          <line x1="622" y1="118" x2="622" y2="110" />
          {/* outer short minarets */}
          <path d="M466,222 L466,152 L474,152 L474,222" />
          <path d="M466,152 L470,140 L474,152" />
          <path d="M648,222 L648,152 L656,152 L656,222" />
          <path d="M648,152 L652,140 L656,152" />
          {/* Mutrah Fort on a hill */}
          <path d="M680,222 Q720,192 766,222" />
          <path d="M706,206 L706,191 L713,191 L713,198 L720,198 L720,191 L727,191 L727,198 L734,198 L734,191 L741,191 L741,206" />
          <path d="M735,191 L735,176 L746,176 L746,191" />
          <path d="M735,176 L735,171 L739,171 L739,176 L742,176 L742,171 L746,171 L746,176" />
        </g>

        {/* ===== PARIS ===== */}
        <g {...S}>
          {/* Eiffel Tower — four curved legs */}
          {/* left leg */}
          <path d="M772,222 C774,210 780,192 784,186" fill="none" />
          {/* right leg */}
          <path d="M832,222 C830,210 824,192 820,186" fill="none" />
          {/* inner left leg */}
          <path d="M780,222 C782,212 785,196 787,186" fill="none" />
          {/* inner right leg */}
          <path d="M824,222 C822,212 819,196 817,186" fill="none" />

          {/* 1st floor platform */}
          <line x1="782" y1="186" x2="822" y2="186" />
          <line x1="783" y1="183" x2="821" y2="183" />

          {/* iconic arch between the legs */}
          <path d="M780,222 Q802,200 824,222" fill="none" />

          {/* cross-bracing between legs (below 1st floor) */}
          <line x1="777" y1="204" x2="827" y2="204" />
          <path d="M779,212 L786,196" fill="none" />
          <path d="M825,212 L818,196" fill="none" />

          {/* 1st → 2nd floor tapered section (left & right edges) */}
          <path d="M787,183 L793,155" fill="none" />
          <path d="M817,183 L811,155" fill="none" />

          {/* 2nd floor platform */}
          <line x1="791" y1="155" x2="813" y2="155" />
          <line x1="792" y1="152" x2="812" y2="152" />

          {/* cross-brace between 1st and 2nd */}
          <line x1="790" y1="168" x2="814" y2="168" />

          {/* 2nd → 3rd floor tapered section */}
          <path d="M795,152 L799,120" fill="none" />
          <path d="M809,152 L805,120" fill="none" />

          {/* small observation balcony (top floor) */}
          <line x1="797" y1="120" x2="807" y2="120" />
          <line x1="798" y1="118" x2="806" y2="118" />

          {/* cross-brace between 2nd and top */}
          <line x1="797" y1="136" x2="807" y2="136" />

          {/* upper pinnacle narrowing to antenna */}
          <path d="M800,118 L801,100" fill="none" />
          <path d="M804,118 L803,100" fill="none" />

          {/* antenna spire */}
          <line x1="802" y1="100" x2="802" y2="68" />
          <line x1="800" y1="82" x2="804" y2="82" />
          <line x1="801" y1="74" x2="803" y2="74" />

          {/* horizontal lattice lines on the body */}
          <line x1="789" y1="190" x2="815" y2="190" />
          <line x1="794" y1="162" x2="810" y2="162" />
          <line x1="797" y1="143" x2="807" y2="143" />
          <line x1="799" y1="128" x2="805" y2="128" />
        </g>

        {/* ===== DUBAI ===== */}
        <g {...S}>
          {/* Burj Al Arab (sail) */}
          <path d="M835,222 L835,108 Q902,150 898,222" />
          <line x1="835" y1="108" x2="835" y2="98" />
          <path d="M835,138 L866,150" />
          <path d="M835,166 L882,178" />
          <path d="M835,192 L892,200" />
          {/* Emirates-style twin towers */}
          <path d="M922,222 L926,150 L934,150 L938,222" />
          <path d="M926,150 L930,132 L934,150" />
          <path d="M950,222 L953,166 L961,166 L964,222" />
          <path d="M953,166 L957,150 L961,166" />
          {/* Burj Khalifa */}
          <path d="M1005,222 L1005,180 L1015,180 L1015,140 L1023,140 L1023,100 L1029,100 L1029,60 L1031,60 L1031,26 L1033,26 L1033,60 L1035,60 L1035,100 L1041,100 L1041,140 L1049,140 L1049,180 L1059,180 L1059,222" />
          <line x1="1032" y1="26" x2="1032" y2="14" />
          {/* towers right */}
          <path d="M1090,222 L1090,120 L1112,120 L1112,222" />
          <line x1="1101" y1="120" x2="1101" y2="100" />
          <path d="M1128,222 L1128,150 L1150,150 L1150,222" />
          <path d="M1132,150 L1132,138 L1146,138 L1146,150" />
        </g>
      </svg>
    </div>
  );
}
