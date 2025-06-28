const cards = [
                // Good cards (40)
                {
                    icon: 'fas fa-heart',
                    title: 'Love',
                    message: 'A deep and meaningful connection is coming your way. Keep your heart open to new possibilities.',
                    color: 'bg-pink-500',
                    type: 'good'
                },
                {
                    icon: 'fas fa-briefcase',
                    title: 'Career',
                    message: 'Your professional path is aligning with your true purpose. Expect recognition and advancement.',
                    color: 'bg-blue-500',
                    type: 'good'
                },
                {
                    icon: 'fas fa-money-bill-wave',
                    title: 'Wealth',
                    message: 'Financial abundance is flowing toward you. Be ready to receive and manage it wisely.',
                    color: 'bg-green-500',
                    type: 'good'
                },
                {
                    icon: 'fas fa-graduation-cap',
                    title: 'Wisdom',
                    message: 'You will gain profound insights that will guide your decisions for years to come.',
                    color: 'bg-purple-500',
                    type: 'good'
                },
                {
                    icon: 'fas fa-users',
                    title: 'Friendship',
                    message: 'A soul connection will enter your life, bringing joy, support, and mutual growth.',
                    color: 'bg-indigo-500',
                    type: 'good'
                },
                {
                    icon: 'fas fa-home',
                    title: 'Home',
                    message: 'Your living space will become a sanctuary of peace and positive energy.',
                    color: 'bg-yellow-500',
                    type: 'good'
                },
                {
                    icon: 'fas fa-plane',
                    title: 'Travel',
                    message: 'An exciting journey will expand your horizons and introduce you to new cultures.',
                    color: 'bg-teal-500',
                    type: 'good'
                },
                {
                    icon: 'fas fa-lightbulb',
                    title: 'Inspiration',
                    message: 'Creative breakthroughs await. Your ideas will flourish and find receptive audiences.',
                    color: 'bg-orange-500',
                    type: 'good'
                },
                {
                    icon: 'fas fa-shield-alt',
                    title: 'Protection',
                    message: 'Divine forces are watching over you. Move forward with confidence and courage.',
                    color: 'bg-amber-500',
                    type: 'good'
                },
                {
                    icon: 'fas fa-balance-scale',
                    title: 'Balance',
                    message: 'Harmony will be restored in all areas of your life. Peace and stability are coming.',
                    color: 'bg-gray-500',
                    type: 'good'
                },
                {
                    icon: 'fas fa-star',
                    title: 'Success',
                    message: 'Your dedication will be rewarded beyond expectations. Celebrate your achievements.',
                    color: 'bg-cyan-500',
                    type: 'good'
                },
                {
                    icon: 'fas fa-seedling',
                    title: 'Growth',
                    message: 'Personal transformation is accelerating. Embrace change and trust the process.',
                    color: 'bg-lime-500',
                    type: 'good'
                },
                {
                    icon: 'fas fa-gem',
                    title: 'Treasure',
                    message: 'You will discover something valuable, whether material or spiritual, that was hidden from view.',
                    color: 'bg-rose-500',
                    type: 'good'
                },
                {
                    icon: 'fas fa-music',
                    title: 'Harmony',
                    message: 'Your life will find its perfect rhythm. Everything will flow with beautiful synchronicity.',
                    color: 'bg-violet-500',
                    type: 'good'
                },
                {
                    icon: 'fas fa-book',
                    title: 'Knowledge',
                    message: 'Important information will come to light, answering questions you\'ve long pondered.',
                    color: 'bg-sky-500',
                    type: 'good'
                },
                {
                    icon: 'fas fa-child',
                    title: 'Innocence',
                    message: 'You will rediscover the simple joys of life through a childlike perspective.',
                    color: 'bg-fuchsia-500',
                    type: 'good'
                },
                {
                    icon: 'fas fa-utensils',
                    title: 'Nourishment',
                    message: 'Your body and soul will receive exactly what they need to thrive and be healthy.',
                    color: 'bg-emerald-500',
                    type: 'good'
                },
                {
                    icon: 'fas fa-paw',
                    title: 'Animal Guide',
                    message: 'An animal spirit will make its presence known, offering you wisdom and protection.',
                    color: 'bg-amber-500',
                    type: 'good'
                },
                {
                    icon: 'fas fa-tree',
                    title: 'Roots',
                    message: 'You will connect with your heritage in meaningful ways, gaining strength from your ancestors.',
                    color: 'bg-green-700',
                    type: 'good'
                },
                {
                    icon: 'fas fa-cloud-sun',
                    title: 'Clarity',
                    message: 'The fog will lift, revealing clear paths forward in situations that seemed confusing.',
                    color: 'bg-blue-300',
                    type: 'good'
                },
                {
                    icon: 'fas fa-hands-helping',
                    title: 'Support',
                    message: 'Unexpected help will arrive just when you need it most. Accept it graciously.',
                    color: 'bg-teal-400',
                    type: 'good'
                },
                {
                    icon: 'fas fa-infinity',
                    title: 'Endless Possibilities',
                    message: 'Limitations will fall away, revealing boundless opportunities for growth and joy.',
                    color: 'bg-purple-400',
                    type: 'good'
                },
                {
                    icon: 'fas fa-laugh',
                    title: 'Joy',
                    message: 'Laughter and lightness will return to your life, lifting your spirits naturally.',
                    color: 'bg-yellow-400',
                    type: 'good'
                },
                {
                    icon: 'fas fa-magic',
                    title: 'Magic',
                    message: 'Miraculous synchronicities will occur, reminding you of life\'s wonderful mysteries.',
                    color: 'bg-indigo-400',
                    type: 'good'
                },
                {
                    icon: 'fas fa-medal',
                    title: 'Achievement',
                    message: 'Your efforts will be recognized and celebrated by those who matter most.',
                    color: 'bg-amber-400',
                    type: 'good'
                },
                {
                    icon: 'fas fa-moon',
                    title: 'Intuition',
                    message: 'Your inner wisdom will grow stronger. Trust your gut feelings—they won\'t steer you wrong.',
                    color: 'bg-blue-800',
                    type: 'good'
                },
                {
                    icon: 'fas fa-paint-brush',
                    title: 'Creativity',
                    message: 'Artistic inspiration will strike. Express yourself freely and without inhibition.',
                    color: 'bg-red-400',
                    type: 'good'
                },
                {
                    icon: 'fas fa-peace',
                    title: 'Peace',
                    message: 'Inner tranquility will settle over you, bringing respite from turmoil and worry.',
                    color: 'bg-white text-gray-800',
                    type: 'good'
                },
                {
                    icon: 'fas fa-question',
                    title: 'Mystery',
                    message: 'A fascinating enigma will enter your life, stimulating your curiosity and intellect.',
                    color: 'bg-gray-400',
                    type: 'good'
                },
                {
                    icon: 'fas fa-rainbow',
                    title: 'Hope',
                    message: 'After difficulty comes renewal. Brighter days are absolutely ahead for you.',
                    color: 'bg-gradient-to-r from-red-500 to-purple-500',
                    type: 'good'
                },
                {
                    icon: 'fas fa-rocket',
                    title: 'Launch',
                    message: 'A project or idea you\'ve nurtured will take off spectacularly. Prepare for liftoff!',
                    color: 'bg-orange-600',
                    type: 'good'
                },
                {
                    icon: 'fas fa-seedling',
                    title: 'New Beginnings',
                    message: 'Something wonderful is germinating in your life. Nurture it with patience and care.',
                    color: 'bg-green-300',
                    type: 'good'
                },
                {
                    icon: 'fas fa-smile',
                    title: 'Happiness',
                    message: 'Simple pleasures will bring you deep satisfaction. Appreciate life\'s small joys.',
                    color: 'bg-yellow-300',
                    type: 'good'
                },
                {
                    icon: 'fas fa-spa',
                    title: 'Healing',
                    message: 'Physical, emotional, or spiritual wounds will mend beautifully with time.',
                    color: 'bg-pink-300',
                    type: 'good'
                },
                {
                    icon: 'fas fa-star-and-crescent',
                    title: 'Mystical Awakening',
                    message: 'Your spiritual senses are heightening. Pay attention to dreams and signs.',
                    color: 'bg-indigo-800',
                    type: 'good'
                },
                {
                    icon: 'fas fa-theater-masks',
                    title: 'Transformation',
                    message: 'You\'re shedding old roles and stepping into a more authentic version of yourself.',
                    color: 'bg-purple-300',
                    type: 'good'
                },
                {
                    icon: 'fas fa-umbrella-beach',
                    title: 'Relaxation',
                    message: 'A period of well-deserved rest and rejuvenation is coming. Enjoy every moment.',
                    color: 'bg-blue-200',
                    type: 'good'
                },
                
                // Bad cards (10)
                {
                    icon: 'fas fa-skull',
                    title: 'Ending',
                    message: 'Something in your life must conclude to make space for new growth. Release with grace.',
                    color: 'bg-gray-800',
                    type: 'bad'
                },
                {
                    icon: 'fas fa-bolt',
                    title: 'Conflict',
                    message: 'Tensions will arise, testing your patience. Respond with wisdom, not reaction.',
                    color: 'bg-yellow-600',
                    type: 'bad'
                },
                {
                    icon: 'fas fa-exclamation-triangle',
                    title: 'Warning',
                    message: 'Be cautious in your decisions. Look before you leap to avoid unnecessary difficulties.',
                    color: 'bg-red-600',
                    type: 'bad'
                },
                {
                    icon: 'fas fa-hourglass-end',
                    title: 'Delay',
                    message: 'Plans may stall unexpectedly. Use this time for preparation rather than frustration.',
                    color: 'bg-amber-800',
                    type: 'bad'
                },
                {
                    icon: 'fas fa-mask',
                    title: 'Deception',
                    message: 'Not everyone has your best interests at heart. Be discerning in whom you trust.',
                    color: 'bg-gray-700',
                    type: 'bad'
                },
                {
                    icon: 'fas fa-poop',
                    title: 'Misfortune',
                    message: 'A streak of bad luck is coming, but it will pass quickly. Maintain your sense of humor.',
                    color: 'bg-brown-500',
                    type: 'bad'
                },
                {
                    icon: 'fas fa-sad-tear',
                    title: 'Sadness',
                    message: 'You may experience a period of melancholy. Allow yourself to feel, then let it go.',
                    color: 'bg-blue-600',
                    type: 'bad'
                },
                {
                    icon: 'fas fa-thermometer-empty',
                    title: 'Exhaustion',
                    message: 'Your energy reserves are low. Prioritize rest and self-care to avoid burnout.',
                    color: 'bg-blue-700',
                    type: 'bad'
                },
                {
                    icon: 'fas fa-traffic-cone',
                    title: 'Obstacle',
                    message: 'Unexpected barriers will appear. Be flexible and creative in finding solutions.',
                    color: 'bg-orange-700',
                    type: 'bad'
                },
                
                // Neutral cards (2)
                {
                    icon: 'fas fa-eye',
                    title: 'Observation',
                    message: 'This is a time to watch and learn rather than act. Gather information patiently.',
                    color: 'bg-gray-300',
                    type: 'neutral'
                },
                {
                    icon: 'fas fa-pause',
                    title: 'Waiting',
                    message: 'The timing isn\'t right for action. Practice patience as circumstances develop.',
                    color: 'bg-gray-200',
                    type: 'neutral'
                }
            ];