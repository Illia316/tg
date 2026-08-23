import React from 'react';

/**
 * Sleek Telegram background with authentic dynamic gradient and subtle pattern overlay
 */
export const TelegramBackground: React.FC<{ isDark?: boolean }> = ({ isDark = false }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Sleek dynamic Telegram gradient */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 50% 40%, #17212b 0%, #0e1621 100%)'
            : 'linear-gradient(135deg, #dbddbb 0%, #6ba587 33%, #d5d88d 66%, #88b884 100%)',
          opacity: isDark ? 1 : 0.88,
        }}
      />

      {/* Repeating SVG Telegram Doodle pattern */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${isDark ? 'opacity-[0.18]' : 'opacity-[0.15]'}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cg fill='none' stroke='${isDark ? '%237da0c2' : '%232d5e4b'}' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3C!-- Paper Plane --%3E%3Cpath d='M35 45 L75 25 L55 80 L45 55 Z M45 55 L75 25 M45 55 L55 68'/%3E%3C!-- Dog Face with Halo --%3E%3Cellipse cx='150' cy='20' rx='18' ry='5' stroke-width='1.5'/%3E%3Cpath d='M135 45 C130 32 120 40 128 56 C130 65 140 72 150 72 C160 72 170 65 172 56 C180 40 170 32 165 45'/%3E%3Ccircle cx='143' cy='48' r='2' fill='${isDark ? '%237da0c2' : '%232d5e4b'}'/%3E%3Ccircle cx='157' cy='48' r='2' fill='${isDark ? '%237da0c2' : '%232d5e4b'}'/%3E%3Cpath d='M147 57 Q150 60 153 57 M150 57 L150 63'/%3E%3C!-- Coffee Cup --%3E%3Cpath d='M260 45 L260 70 C260 76 270 80 280 80 C290 80 300 76 300 70 L300 45 Z'/%3E%3Cpath d='M300 52 C308 52 312 58 312 64 C312 70 306 72 300 72'/%3E%3Cpath d='M270 35 Q273 25 270 18 M280 35 Q283 25 280 18 M290 35 Q293 25 290 18'/%3E%3C!-- Chat Bubble --%3E%3Cpath d='M40 150 C40 135 55 125 75 125 C95 125 110 135 110 150 C110 162 98 172 82 174 L75 185 L73 174 C55 172 40 162 40 150 Z'/%3E%3Ccircle cx='60' cy='148' r='2.5' fill='${isDark ? '%237da0c2' : '%232d5e4b'}'/%3E%3Ccircle cx='75' cy='148' r='2.5' fill='${isDark ? '%237da0c2' : '%232d5e4b'}'/%3E%3Ccircle cx='90' cy='148' r='2.5' fill='${isDark ? '%237da0c2' : '%232d5e4b'}'/%3E%3C!-- Gamepad --%3E%3Crect x='160' y='135' width='55' height='32' rx='16'/%3E%3Cpath d='M173 144 L173 158 M166 151 L180 151'/%3E%3Ccircle cx='198' cy='147' r='2.5' fill='${isDark ? '%237da0c2' : '%232d5e4b'}'/%3E%3C!-- Rocket --%3E%3Cpath d='M290 160 C290 130 310 115 310 115 C310 115 330 130 330 160 L320 170 L300 170 Z'/%3E%3Ccircle cx='310' cy='142' r='4'/%3E%3C!-- Key --%3E%3Ccircle cx='240' cy='240' r='9'/%3E%3Cpath d='M249 240 L280 240 L280 248 M272 240 L272 246'/%3E%3C!-- Heart --%3E%3Cpath d='M330 335 C330 325 342 320 350 330 C358 320 370 325 370 335 C370 350 350 365 350 365 C350 365 330 350 330 335 Z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '360px 360px',
          backgroundRepeat: 'repeat'
        }}
      />
    </div>
  );
};
