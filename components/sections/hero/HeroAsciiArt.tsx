'use client';

import { useState, useEffect, useMemo } from 'react';

const FINAL_ASCII = `                                       .  -                   .  +--+#  .                                 
                                   - -###-+.. #-              . . -######-#                               
                               - --#######-.-.#+#+- ..   -.   #--+++#-#####++                             
                             --##+########++#######-++-.##.#++.+##+#########+-#.                    .     
                            +####++#####+#########+#############################+.                  ..    
                           #+###+ ################################################+                       
                          ####+#.######.###################################+########                      
                        -##+.+++##++#################################################-                    
                       .###-#+########################################################+                   
                      .######-#######################################+################+#                  
                    ..#+####.##+############+#################+#########################-                 
                     ##+#######-######+################################+################+                 
                    ####+#############+######+#####################+####+################+                
                   .######+###########+##################################################-.               
                   ###################+###########################+#####+####+###########++               
                  -##################################################+########+###########+-              
                  ####################################################+########+############              
                 .#####################################################+###################+-             
                .##########################################################################+.             
                ##########################################################################+#+             
                #####################+######################################################+             
                ################.###.  #####.##################+ .###########################-            
                ################--+#.. +-+##  ################-#+++########################+#-            
               .######+########-#-  ##.+####-..-################++#########################+#+            
               .###############  .              .###+++-#####.       .########################            
                #+############    ..  .---#-+     -### ######.   .-++#######################.-            
                #+########### . .. +++###-..-+     ###  -###+-+.  -+#######################+..            
                #++#+########   +############-      . .  -##. .############################+-+            
                +--#########       #######++ .            -#. ---########-+################-+.            
                -+-#########              ..-              -    -+.          +#############--             
                 -.#########                                                  #############+-             
                  -+########                                                   ###########.+              
                 .--########                                                   .##########--              
                   -########                                                   -#########.+               
                    +#######                                                   .+######++.                
                     #######                                                   -#######+                  
                     .+#####.                                                  ########                   
                       ######                                                 .#######                    
                        #####                            .+                   +######                     
                         ###-+                                               .######                      
                         -###+.                                              ######-                      
                          -####                                             ######+                       
                           #####                                           #######+                       
                            ######              ..---.   ----             ########                        
                            #######                                     -#########                        
                            ########+                                  ##-########                        
                            ######### -                              +-   ########                        
                           +#########  .-                          .     -########                        
                           -########+     .                              ####### -                        
                            ##+######       .                   -.       #####++                          
                           .#-#######         +-              ...        #####.                           
                         . -  .+#####-          -#         +###           ##-  -                          
                          . #--.+####.             --.#-#+-#-             -. +-..                         
                         .#-#+###+..#                  ..                 +. +.+                          
                         -+#####.++#++.                                #+  -++-+.                         
                         +.#++##-###+.   .                          -    -######-                         
                         ++#-###-####.# +.   -+#          .-   -.-.. -.- ##++##+-                         
                         +##+#+-.### #####+#+-.#- + -##+##+-.   ..-. ###-#+#+##+.                         
                         +##-+# ##+# #+##+####-#+.++.+  #++#+-#-+#+#+#-#+#+#+#+#-                         
                         +#+-.# ####.#.#+-++##-##+#.-#+.####++#+-#####-###-+-##+#                         
                       .#-+##.#-##+#-+.--.+-#--+++# ##  ++-##-#+#####+-#-#.+ ##+#+#                       
                     .#---.#-##.######.#+.+.#+##++# ##+.#####.##########--.+--#++.-+.###+                 
                    + .    .#+#-####++ #+-++#-#####.######+##-##+#######-+ +.#+.     . . .---+.           
                  .--.    .-  .#++#### #--###-##+##-##+.##+##-##-#######-#..+#.          ..+##++-+-.      
               ..-.      .   . + #-#+#.#+++##+#####-### -#.##-##-#####+#-# +-              .-+--++++-     
             --                 +-####+##++-######+-##+ -#.##-##+#####+#.+-          .     .-   .++-      `;

const RANDOM_CHARS = ['#', '@', '%', '+', '-', '=', '*', '.', ':', ' ', '/', '\\', '|', '_'];

export default function HeroAsciiArt() {
    // Memoize the final ASCII array for performance
    const finalChars = useMemo(() => FINAL_ASCII.split(''), []);

    // Track if component has mounted (client-side)
    const [hasMounted, setHasMounted] = useState(false);

    // Initialize with empty string to avoid hydration mismatch
    // Random content will be generated after mount
    const [displayedArt, setDisplayedArt] = useState('');

    const [isAnimating, setIsAnimating] = useState(true);
    const [isGlitching, setIsGlitching] = useState(false);

    // Generate random initial state only on client after mount
    useEffect(() => {
        const initialRandom = FINAL_ASCII.split('').map((char) => {
            if (char === '\n') return '\n';
            return RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
        });

        // Use setTimeout to avoid synchronous setState warning
        const timeoutId = setTimeout(() => {
            setDisplayedArt(initialRandom.join(''));
            setHasMounted(true);
        }, 0);

        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        // Don't start animation until we've mounted and have initial random state
        if (!hasMounted) return;

        const startTime = Date.now();
        const duration = 3000; // 3 seconds
        let animationFrame: number;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out curve for smoother ending
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            // Generate current frame
            const currentChars = finalChars.map((finalChar) => {
                if (finalChar === '\n') return '\n';

                // Probability increases with progress
                const shouldReveal = Math.random() < easeProgress;

                if (shouldReveal) {
                    return finalChar;
                } else {
                    return RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
                }
            });

            setDisplayedArt(currentChars.join(''));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                // Ensure final state is exact
                setDisplayedArt(FINAL_ASCII);
                setIsAnimating(false);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [hasMounted, finalChars]);

    // Random glitch effect after animation completes
    useEffect(() => {
        if (isAnimating) return;

        let glitchTimeout: NodeJS.Timeout;
        let glitchInterval: NodeJS.Timeout;

        const scheduleGlitch = () => {
            // Random interval between 2-6 seconds
            const nextGlitchDelay = 2000 + Math.random() * 4000;

            glitchTimeout = setTimeout(() => {
                setIsGlitching(true);

                // Glitch duration between 150-400ms
                const glitchDuration = 150 + Math.random() * 250;

                // Scramble ASCII during glitch
                glitchInterval = setInterval(() => {
                    const scrambled = finalChars.map((char) => {
                        if (char === '\n') return '\n';
                        // 30% chance to scramble each character
                        if (Math.random() < 0.3) {
                            return RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
                        }
                        return char;
                    }).join('');
                    setDisplayedArt(scrambled);
                }, 50);

                setTimeout(() => {
                    clearInterval(glitchInterval);
                    setDisplayedArt(FINAL_ASCII);
                    setIsGlitching(false);
                    // Schedule next glitch
                    scheduleGlitch();
                }, glitchDuration);
            }, nextGlitchDelay);
        };

        scheduleGlitch();

        return () => {
            clearTimeout(glitchTimeout);
            clearInterval(glitchInterval);
        };
    }, [isAnimating, finalChars]);

    return (
        <pre
            className={`font-mono text-[7px] sm:text-[9px] md:text-[10px] leading-[8px] sm:leading-[10px] md:leading-[11px] text-neutral-300 font-bold whitespace-pre overflow-hidden ${isGlitching ? 'glitch-effect' : ''}`}
            style={{
                transition: isAnimating ? 'none' : 'opacity 0.3s ease',
            }}
        >
            {displayedArt}
        </pre>
    );
}
