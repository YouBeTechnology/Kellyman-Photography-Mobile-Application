/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'APP_BG_Layer',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '504', '860', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Social_Media_Buttons_HolderCopy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['-2', '760', '507', '111', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1.00)",[270,[['rgba(85,85,85,1.00)',0],['rgba(0,0,0,1.00)',55]]]],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'testkellyman',
                            display: 'none',
                            type: 'image',
                            rect: ['-68', '127', '635', '787', 'auto', 'auto'],
                            clip: 'rect(0px 575px 733.666748046875px 65px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"b68a8cf9e296438da0352b4b9cb7254d.jpg",'0px','0px'],
                            transform: [[],[],[],['0.99304']]
                        },
                        {
                            id: 'Testmonies_Banner',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '-1', '505', '123', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Testmonies_Text',
                            display: 'block',
                            type: 'text',
                            rect: ['79', '96', '356px', '44px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Testimonies",
                            align: "center",
                            font: ['Tahoma, Geneva, sans-serif', [22, ""], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Services_Child_Picture',
                            display: 'block',
                            type: 'image',
                            rect: ['-140', '185', '865px', '594px', 'auto', 'auto'],
                            clip: 'rect(0px 602.5924072265625px 594px 192.5px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Capture.PNG",'0px','0px'],
                            transform: [[],[],[],['1.22818','1.37374']]
                        },
                        {
                            id: 'Services_Stack',
                            display: 'block',
                            type: 'text',
                            rect: ['49', '147px', '423', '613px', 'auto', 'auto'],
                            overflow: 'scroll',
                            opacity: '0',
                            text: "<p style=\"margin:0px\">​</p><p style=\"margin: 0px;\">​​Welcome to Kellyman Photography! We are your number one resource for portrait photography, wedding photography and event photography in Yardley and the surrounding areas. We love Yardley but are willing to travel to meet your photography needs. At Kellyman Photography, we're 'Capturing Moments That Last A Lifetime.' We look forward to capturing yours. Please feel free to contact us. There's absolutely no obligation. We'd love to get to know you better.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Weddings</p><p style=\"margin: 0px;\">We like to make your day special and in doing so, all our wedding packages are custom made for you.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Engagement Sessions</p><p style=\"margin: 0px;\">We're ready to bring your dream engagement pictures to life and bring something special to your photos. Contact us and let us know what you want to do and we'll make them a reality.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Commercial/Promotional</p><p style=\"margin: 0px;\">We're available for commercial photography for schools, gyms, restaurants and other businesses for social media, websites and advertisements. We're excited to work with you and your company.&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">For exact prices for services, we encourage you to contact us directly through out email form or by phone. Just send us over your idea with as much detail as you can give us and we'll get back to you with an exact price.</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(20,20,154,1.00)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Social_Media_Buttons_HolderCopy2',
                            display: 'block',
                            type: 'rect',
                            rect: ['-2', '760', '507', '113', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1.00)",[270,[['rgba(85,85,85,1.00)',0],['rgba(0,0,0,1.00)',55]]]],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Page_Banner_Generic_Sub_Bar_BlogCopy',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '-1', '504', '113', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'testmonies',
                            display: 'none',
                            type: 'text',
                            rect: ['49', '143', '422', '617', 'auto', 'auto'],
                            overflow: 'scroll',
                            opacity: '0',
                            text: "<br><br>\"Not only is Chris Kellyman a gifted photographer, he is very natural and comfortable around children. My son enjoyed a very fun and relaxed photo session with him and it shows in the fabulous photographs that I now have of him. They absolutely reflect my son's personality and I'll treasure them forever,thank you Kellyman Photography for a great experience!\"<br>The Wright Family 2015<br><br>\"Chris was an absolute pleasure to work with! His works speaks volumes, he extremely professional, personable, and patient! We used Chris for our engagement photos, and most recently for our wedding and we are truly please with our pictures. So much so, we purchased all 628 shots! We are soon building a new home, and plan to have Chris photograph it in the near future. Again it was a pleasure working with Chris, and we look forward to working with him soon!\"<br>The Bowers/ Hall Wedding 2014<br><br>Chris was a real great guy to work with! He's good with a camera and he knows just how to shoot you at the proper angles to give you the best possible product. I loved working with him and highly recommend him to all who need head shots, portraits, or anything else<br>Erika S. 2014<br><br>Chris was very professional and able to sooth my anxieties with a calm and reassuring demeanor. He was creative, had an eye for my particular need, and was able to accomplish this in an extremely short time frame. The product was sensational and was used for professional journals and news outlets around the country. I highly and very enthusiastically recommend him.<br>Donald G. 2014<br><br>\"Chris is an amazing photographer! It was such a blessing to have him do our wedding pictures! He is so organized, thorough and on top of things that I didn't have to worry about the photography at all.  On the day of the wedding, it was so much fun having him take our pictures. His friendly and fun personality made the picture taking a fun experience.  Chris did a great job capturing all the special moments from the beginning to the end of the day.  The pictures from our wedding are absolutely beautiful! I'm so thankful Kellyman Photography did our wedding pictures.\"<br>The Miller's Wedding 2014<br><br>\"My experience with Kellyman photography is and always has been amazing! He always captures the photos of my son, he us very patient with children always professional. I give him an A+. I have never been disappointed! Thank you\"<br>The Johnson Family 2013<br><br>\"Working with Kellyman Photography was a wonderful experience. Chris was accommodating, attentive and a talented photographer. As he interacted with each of us he was able to evoke a smile, a smirk, a sigh or much laughter. His photographs captured our family story and that is what I was looking for.\"<br>The Robins Family 2013<br><br>He is A Awesome Photographer!!!!Thanks Chris The Davis Family:)<br>The Batista Wedding 2012<br><br><br>\"I have worked with Kellyman Photography on more than one occasion in the past 3 years and for all events I have been nothing but pleased with his service. If there was ever an issue, a quick email or phone call to Chris and the it would be solved!\"<br>Elegant Touch of Sisters 2011<br><br>\"With Kellyman Photography, there will be no boring, stiff, or predictable photos.. Chris Kellyman specializes in capturing those priceless, unexpected moments that come and go in the blink of an eye. He has fantastic energy and you will be amazed by his creativity. But don't take my word for it, call or email him yourself.\"<br>Haley London Lorjuste 2010<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(20,20,154,1.00)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'callus',
                            symbolName: 'callus',
                            display: 'none',
                            type: 'rect',
                            rect: ['17', '162', '480', '800', 'auto', 'auto'],
                            clip: 'rect(656.0001220703125px 387.31976318359375px 712px 106.51325988769531px)',
                            transform: [[],[],[],['1','1.14286']]
                        },
                        {
                            id: 'Services_Text',
                            display: 'block',
                            type: 'text',
                            rect: ['83', '96', '356px', '44px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Services<br>",
                            align: "center",
                            font: ['Tahoma, Geneva, sans-serif', [22, ""], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'updateholder',
                            symbolName: 'updateholder',
                            display: 'none',
                            type: 'rect',
                            rect: ['14', '179', '479', '646', 'auto', 'auto'],
                            transform: [[],[],[],['1.04802','1.11223']]
                        },
                        {
                            id: 'Page_Banner_Generic_Sub_Bar_Blog',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '-1', '505', '106', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Blog_text',
                            display: 'block',
                            type: 'text',
                            rect: ['75', '96', '356px', '44px', 'auto', 'auto'],
                            opacity: '0',
                            text: "News Feed",
                            align: "center",
                            font: ['Tahoma, Geneva, sans-serif', [22, ""], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'viiewgal',
                            symbolName: 'viiewgal',
                            display: 'block',
                            type: 'rect',
                            rect: ['-1', '-216', '506', '717', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['1','0.0007']]
                        },
                        {
                            id: 'Gallery_Banner',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '-1', '505', '123', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Gallery_Text',
                            display: 'block',
                            type: 'text',
                            rect: ['80', '96', '356px', '44px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Photo Gallery",
                            align: "center",
                            font: ['Tahoma, Geneva, sans-serif', [22, ""], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Kellyman_Contact_Child_Image',
                            display: 'block',
                            type: 'image',
                            rect: ['12', '25', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(106.666748046875px 450.1636657714844px 800px 29.83590316772461px)',
                            opacity: '0.017045454545455',
                            fill: ["rgba(0,0,0,0)",im+"Kellyman%20Contact%20Child%20Image.png",'0px','0px'],
                            transform: [[],[],[],['1.20283','1.08588']]
                        },
                        {
                            id: 'contact',
                            symbolName: 'blog2_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['29', '154', '444', '540', 'auto', 'auto'],
                            clip: 'rect(0px 444px -0.9604926109313965px 0px)',
                            opacity: '0.83760702762848',
                            transform: [[],[],[],['1.1402','1.04259']]
                        },
                        {
                            id: 'Social_Media_Buttons_Holder',
                            display: 'block',
                            type: 'rect',
                            rect: ['-2', '700', '507', '171', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1.00)",[270,[['rgba(85,85,85,1.00)',0],['rgba(0,0,0,1.00)',55]]]],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect2Copy2',
                            display: 'block',
                            type: 'rect',
                            rect: ['328', '749px', '90px', '86px', 'auto', 'auto'],
                            borderRadius: ["15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px"],
                            opacity: '0',
                            fill: ["rgba(36,29,152,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect2Copy',
                            display: 'block',
                            type: 'rect',
                            rect: ['213', '748', '90px', '86px', 'auto', 'auto'],
                            borderRadius: ["15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px"],
                            opacity: '0',
                            fill: ["rgba(36,29,152,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect2',
                            display: 'block',
                            type: 'rect',
                            rect: ['99', '749px', '90px', '86px', 'auto', 'auto'],
                            borderRadius: ["15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px"],
                            opacity: '0',
                            fill: ["rgba(36,29,152,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Kellyman_Contact_Social_Media_Buttons',
                            display: 'block',
                            type: 'image',
                            rect: ['13', '91', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(711.6668701171875px 411.58154296875px 800px 71.26905822753906px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Kellyman%20Contact%20Social%20Media%20Buttons.png",'0px','0px'],
                            transform: [[],[],[],['0.03472','1.03396']]
                        },
                        {
                            id: 'fbclick',
                            display: 'block',
                            type: 'rect',
                            rect: ['99', '749px', '90px', '86px', 'auto', 'auto'],
                            borderRadius: ["15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px"],
                            opacity: '0',
                            fill: ["rgba(36,29,152,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'twitclick',
                            display: 'block',
                            type: 'rect',
                            rect: ['214', '749px', '90px', '86px', 'auto', 'auto'],
                            borderRadius: ["15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px"],
                            opacity: '0',
                            fill: ["rgba(36,29,152,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'instaclick',
                            display: 'block',
                            type: 'rect',
                            rect: ['329', '749px', '90px', '86px', 'auto', 'auto'],
                            borderRadius: ["15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px", "15.33349609375px 15.33349609375px"],
                            opacity: '0',
                            fill: ["rgba(36,29,152,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Page_Banner_Generic_Sub_Bar_Contact',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '-1', '504', '113', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Contact_Us',
                            display: 'block',
                            type: 'text',
                            rect: ['79', '96', '356px', '44px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Contact Us",
                            align: "center",
                            font: ['Tahoma, Geneva, sans-serif', [22, ""], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Social_Media',
                            display: 'block',
                            type: 'text',
                            rect: ['53', '717', '416', '44px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin:0px\"><span style=\"font-size: 16px;\">Follow Kellyman Photography on Social Media​</span></p>",
                            align: "center",
                            font: ['Tahoma, Geneva, sans-serif', [18, "px"], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Kellyman_About_Trans_Photo',
                            display: 'block',
                            type: 'image',
                            rect: ['12', '32', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(332.5px 466.7342224121094px 759.2685546875px 13.161495208740234px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Kellyman%20About%20TransPhoto.png",'0px','0px'],
                            transform: [[],[],[],['1.1173','1.19317']]
                        },
                        {
                            id: 'Social_Media_Buttons_HolderCopy',
                            display: 'block',
                            type: 'rect',
                            rect: ['-2', '760', '507', '113', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1.00)",[270,[['rgba(85,85,85,1.00)',0],['rgba(0,0,0,1.00)',55]]]],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Kellyman_About_Text',
                            display: 'block',
                            type: 'image',
                            rect: ['19', '32', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(341.6666259765625px 480px 781.66650390625px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Kellyman%20About%20Text.png",'0px','0px'],
                            transform: [[],[],[],['1','0.97036']]
                        },
                        {
                            id: 'Kellyman_About_Photo_Children',
                            display: 'block',
                            type: 'image',
                            rect: ['1', '32', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(111.25px 480px 326.25px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Kellyman%20About%20Photo%20Children.png",'0px','0px'],
                            transform: [[],[],[],['0.01537','1.03396']]
                        },
                        {
                            id: 'Kellyman_About_View_Profile_Button',
                            display: 'block',
                            type: 'image',
                            rect: ['21', '74', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(731.6666259765625px 343.333251953125px 785px 145px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Kellyman%20About%20View%20Profile%20Button.png",'0px','0px']
                        },
                        {
                            id: 'Page_Banner_Generic_Sub_Bar_About',
                            display: 'block',
                            type: 'rect',
                            rect: ['0px', '-1', '504', '111', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'About_Us_text',
                            display: 'block',
                            type: 'text',
                            rect: ['83', '96', '356px', '44px', 'auto', 'auto'],
                            opacity: '0',
                            text: "About Us",
                            align: "center",
                            font: ['Tahoma, Geneva, sans-serif', [22, ""], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Mobile_Home_Mid_HolderCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['12', '7', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(350px 480px 800px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"Kellymanphotography%20Mobile%20%20Home%20Mid.png",'0px','0px'],
                            transform: [[],[],[],['1.05208','1.13333']]
                        },
                        {
                            id: 'Home_Footer_Text',
                            display: 'block',
                            type: 'text',
                            rect: ['45', '801', '415', '33', 'auto', 'auto'],
                            opacity: '0',
                            text: "Quality, Professionalism, Picture Perfect",
                            align: "center",
                            font: ['Palatino Linotype, Book Antigua, Palatino, serif', [21, "px"], "rgba(255,255,255,1.00)", "400", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'Buttons_Movie',
                            symbolName: 'Buttons_Movie',
                            display: 'block',
                            type: 'rect',
                            rect: ['9', '5', '485', '804', 'auto', 'auto'],
                            clip: 'rect(464.000244140625px 485px 804px 0px)',
                            opacity: '0',
                            transform: [[],[],[],['1.06','1.07']]
                        },
                        {
                            id: 'Slide_holder_Trans_BG',
                            display: 'block',
                            type: 'rect',
                            rect: ['2', '69', '502', '365', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(19,16,16,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Banner_Image',
                            type: 'image',
                            rect: ['12', '-80', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(0px 480px 90px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Banner%20Image.png",'0px','0px'],
                            transform: [[],[],[],['1.05459']]
                        },
                        {
                            id: 'content',
                            symbolName: 'content',
                            display: 'block',
                            type: 'rect',
                            rect: ['13', '77', '477', '347', 'auto', 'auto'],
                            transform: [[],[],[],['1.0587']]
                        },
                        {
                            id: 'Logo',
                            display: 'block',
                            type: 'image',
                            rect: ['-185', '0', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(0px 181.166748046875px 119.83349609375px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Logo.png",'0px','0px'],
                            transform: [[],[],[],['0.9264','0.98887']]
                        },
                        {
                            id: 'LogoCopy2',
                            display: 'none',
                            type: 'image',
                            rect: ['16', '40', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(0px 181.166748046875px 119.83349609375px 0px)',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Logo.png",'0px','0px'],
                            transform: [[],[],[],['1.07797','1.11313']]
                        },
                        {
                            id: 'Flash_Movie',
                            symbolName: 'Flash_Movie',
                            display: 'block',
                            type: 'rect',
                            rect: ['-185', '-181', '540', '500', 'auto', 'auto'],
                            opacity: '0.9400000166893'
                        },
                        {
                            id: 'Flash1',
                            display: 'block',
                            type: 'image',
                            rect: ['52', '24', '66', '62', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"Flash.png",'0px','0px'],
                            filter: [0, 0, 1.7, 0, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],['-6']]
                        },
                        {
                            id: 'Flash2Copy',
                            display: 'block',
                            type: 'image',
                            rect: ['-185', '-190', '66', '62', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Flash.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'camera-shutter-click-052',
                            volume: '0.24360655737705',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"camera-shutter-click-052.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'Login_Button',
                            display: 'block',
                            type: 'image',
                            rect: ['140', '4', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(0px 480px 67.5px 322.5px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Login%20Button.png",'0px','0px']
                        },
                        {
                            id: 'Kellyman_Back_Button',
                            display: 'none',
                            type: 'image',
                            rect: ['19', '4', '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(0px 480px 84px 330px)',
                            fill: ["rgba(0,0,0,0)",im+"Kellyman%20Back%20Button.png",'0px','0px']
                        },
                        {
                            id: 'Services_Click_Button',
                            display: 'block',
                            type: 'rect',
                            rect: ['45', '474', '171px', '86px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Galleries_Click_Button',
                            display: 'block',
                            type: 'rect',
                            rect: ['303', '468', '171px', '86px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Contact_Click_Button',
                            display: 'block',
                            type: 'rect',
                            rect: ['37px', '578', '171px', '86px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'About_Click_Button',
                            display: 'block',
                            type: 'rect',
                            rect: ['303', '578', '171px', '86px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Blog_Click_Button',
                            display: 'block',
                            type: 'rect',
                            rect: ['37px', '694', '171px', '86px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Testimonies_Click_Button',
                            display: 'block',
                            type: 'rect',
                            rect: ['303', '694', '171px', '86px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text2',
                            display: 'block',
                            type: 'text',
                            rect: ['41', '867', '451', '66px', 'auto', 'auto'],
                            opacity: '0',
                            text: "The Kellyman Photography Experience<br>We provide the best service for you photography needs<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(255,255,255,1.00)", "500", "none", "normal", "break-word", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '505', '860', 'auto', 'auto'],
                            sizeRange: ['20px','undefined','undefined','undefined'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 10962,
                    autoPlay: true,
                    labels: {
                        "Intro": 991,
                        "Home": 1865,
                        "About": 2125,
                        "Contact": 3808,
                        "Blog": 5037,
                        "Services": 6405,
                        "Galleries": 8000,
                        "Testimonies": 9192
                    },
                    data: [
                        [
                            "eid109",
                            "left",
                            185,
                            390,
                            "easeInOutBack",
                            "${Logo}",
                            '-185px',
                            '-13px'
                        ],
                        [
                            "eid690",
                            "left",
                            1865,
                            0,
                            "easeInOutBack",
                            "${Logo}",
                            '-13px',
                            '-13px'
                        ],
                        [
                            "eid949",
                            "left",
                            3688,
                            0,
                            "easeInOutBack",
                            "${Kellyman_About_Text}",
                            '19px',
                            '19px'
                        ],
                        [
                            "eid1089",
                            "width",
                            10860,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_HolderCopy3}",
                            '507px',
                            '507px'
                        ],
                        [
                            "eid1071",
                            "display",
                            2024,
                            0,
                            "easeOutExpo",
                            "${Flash1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid917",
                            "top",
                            8913,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_HolderCopy2}",
                            '760px',
                            '760px'
                        ],
                        [
                            "eid967",
                            "scaleY",
                            8632,
                            368,
                            "easeInOutBack",
                            "${viiewgal}",
                            '0.0007',
                            '1'
                        ],
                        [
                            "eid295",
                            "opacity",
                            6800,
                            247,
                            "linear",
                            "${Services_Child_Picture}",
                            '0',
                            '1'
                        ],
                        [
                            "eid467",
                            "opacity",
                            7047,
                            100,
                            "easeInBack",
                            "${Services_Child_Picture}",
                            '1',
                            '0.64102564102564'
                        ],
                        [
                            "eid472",
                            "opacity",
                            7147,
                            303,
                            "easeOutBack",
                            "${Services_Child_Picture}",
                            '0.64102564102564',
                            '0.37606820196677'
                        ],
                        [
                            "eid468",
                            "opacity",
                            7450,
                            219,
                            "easeInOutBack",
                            "${Services_Child_Picture}",
                            '0.37606820196677',
                            '0.19066194884288'
                        ],
                        [
                            "eid237",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${APP_BG_Layer}",
                            'none',
                            'none'
                        ],
                        [
                            "eid170",
                            "display",
                            2070,
                            0,
                            "easeInOutBack",
                            "${APP_BG_Layer}",
                            'none',
                            'none'
                        ],
                        [
                            "eid172",
                            "display",
                            2125,
                            0,
                            "easeInOutBack",
                            "${APP_BG_Layer}",
                            'none',
                            'block'
                        ],
                        [
                            "eid398",
                            "opacity",
                            4898,
                            26,
                            "easeInOutBack",
                            "${contact}",
                            '0.83760702762848',
                            '0.92989999157751'
                        ],
                        [
                            "eid908",
                            "left",
                            4898,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_HolderCopy}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid882",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${LogoCopy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid880",
                            "display",
                            991,
                            0,
                            "easeInOutBack",
                            "${LogoCopy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid881",
                            "display",
                            1000,
                            0,
                            "easeInOutBack",
                            "${LogoCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1088",
                            "left",
                            10860,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_HolderCopy3}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid590",
                            "left",
                            8426,
                            0,
                            "easeInOutBack",
                            "${updateholder}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid575",
                            "display",
                            9109,
                            0,
                            "easeInOutBack",
                            "${Gallery_Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid480",
                            "display",
                            9255,
                            0,
                            "easeInOutBack",
                            "${Gallery_Text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid481",
                            "display",
                            9690,
                            0,
                            "easeInOutBack",
                            "${Gallery_Text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid123",
                            "opacity",
                            0,
                            250,
                            "easeInOutBack",
                            "${Banner_Image}",
                            '0',
                            '1'
                        ],
                        [
                            "eid202",
                            "display",
                            3808,
                            0,
                            "easeInOutBack",
                            "${Kellyman_About_Photo_Children}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1098",
                            "display",
                            5000,
                            0,
                            "easeInOutBack",
                            "${fbclick}",
                            'block',
                            'none'
                        ],
                        [
                            "eid121",
                            "top",
                            0,
                            250,
                            "easeInOutBack",
                            "${Banner_Image}",
                            '-80px',
                            '0px'
                        ],
                        [
                            "eid970",
                            "display",
                            9109,
                            0,
                            "easeInOutBack",
                            "${viiewgal}",
                            'block',
                            'none'
                        ],
                        [
                            "eid583",
                            "display",
                            9109,
                            0,
                            "easeInOutBack",
                            "${Testmonies_Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid587",
                            "display",
                            9192,
                            0,
                            "easeInOutBack",
                            "${Testmonies_Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid584",
                            "display",
                            9255,
                            0,
                            "easeInOutBack",
                            "${Testmonies_Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid585",
                            "display",
                            9305,
                            0,
                            "easeInOutBack",
                            "${Testmonies_Text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid589",
                            "display",
                            9397,
                            0,
                            "easeInOutBack",
                            "${Testmonies_Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid148",
                            "opacity",
                            1250,
                            513,
                            "easeInOutBack",
                            "${Buttons_Movie}",
                            '0',
                            '0.88000001907349'
                        ],
                        [
                            "eid191",
                            "opacity",
                            2620,
                            380,
                            "easeInOutBack",
                            "${Kellyman_About_Photo_Children}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1080",
                            "opacity",
                            9551,
                            139,
                            "linear",
                            "${testmonies}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1052",
                            "width",
                            991,
                            147,
                            "easeOutSine",
                            "${Flash2Copy}",
                            '66px',
                            '68px'
                        ],
                        [
                            "eid1053",
                            "width",
                            1138,
                            206,
                            "easeOutSine",
                            "${Flash2Copy}",
                            '540px',
                            '68px'
                        ],
                        [
                            "eid1050",
                            "filter.blur",
                            1138,
                            0,
                            "easeOutExpo",
                            "${Flash2Copy}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid1087",
                            "opacity",
                            9397,
                            220,
                            "easeInOutBack",
                            "${Social_Media_Buttons_HolderCopy3}",
                            '0',
                            '0.92150539911094'
                        ],
                        [
                            "eid1064",
                            "scaleY",
                            991,
                            55,
                            "easeOutExpo",
                            "${Flash1}",
                            '1',
                            '6.54906'
                        ],
                        [
                            "eid200",
                            "display",
                            3808,
                            0,
                            "easeInOutBack",
                            "${Kellyman_About_Trans_Photo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1101",
                            "opacity",
                            4864,
                            60,
                            "easeInOutBack",
                            "${twitclick}",
                            '0',
                            '0.19658091103929'
                        ],
                        [
                            "eid1072",
                            "display",
                            2024,
                            0,
                            "easeOutExpo",
                            "${Flash2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1107",
                            "height",
                            7669,
                            0,
                            "linear",
                            "${Services_Stack}",
                            '613px',
                            '613px'
                        ],
                        [
                            "eid282",
                            "opacity",
                            6405,
                            250,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_BlogCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid476",
                            "display",
                            8000,
                            0,
                            "easeInOutBack",
                            "${Gallery_Banner}",
                            'none',
                            'block'
                        ],
                        [
                            "eid576",
                            "display",
                            9109,
                            0,
                            "easeInOutBack",
                            "${Gallery_Banner}",
                            'block',
                            'none'
                        ],
                        [
                            "eid477",
                            "display",
                            9192,
                            0,
                            "easeInOutBack",
                            "${Gallery_Banner}",
                            'none',
                            'none'
                        ],
                        [
                            "eid478",
                            "display",
                            9500,
                            0,
                            "easeInOutBack",
                            "${Gallery_Banner}",
                            'none',
                            'none'
                        ],
                        [
                            "eid482",
                            "opacity",
                            8250,
                            246,
                            "easeInOutBack",
                            "${Gallery_Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid179",
                            "opacity",
                            2125,
                            250,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_About}",
                            '0',
                            '1'
                        ],
                        [
                            "eid232",
                            "display",
                            5037,
                            0,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_Blog}",
                            'none',
                            'block'
                        ],
                        [
                            "eid233",
                            "display",
                            6229,
                            0,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_Blog}",
                            'block',
                            'none'
                        ],
                        [
                            "eid285",
                            "display",
                            6250,
                            0,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_Blog}",
                            'none',
                            'none'
                        ],
                        [
                            "eid111",
                            "opacity",
                            185,
                            390,
                            "easeInOutBack",
                            "${Logo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid217",
                            "top",
                            4629,
                            295,
                            "easeInOutBack",
                            "${Kellyman_Contact_Social_Media_Buttons}",
                            '91px',
                            '21px'
                        ],
                        [
                            "eid1074",
                            "opacity",
                            9500,
                            196,
                            "easeInOutBack",
                            "${testkellyman}",
                            '0',
                            '0.16239295594203'
                        ],
                        [
                            "eid1084",
                            "top",
                            10860,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_HolderCopy3}",
                            '760px',
                            '760px'
                        ],
                        [
                            "eid903",
                            "left",
                            4629,
                            0,
                            "easeInOutBack",
                            "${Kellyman_Contact_Social_Media_Buttons}",
                            '13px',
                            '13px'
                        ],
                        [
                            "eid904",
                            "left",
                            4924,
                            0,
                            "easeInOutBack",
                            "${Kellyman_Contact_Social_Media_Buttons}",
                            '13px',
                            '17px'
                        ],
                        [
                            "eid1057",
                            "rotateZ",
                            1298,
                            0,
                            "easeOutExpo",
                            "${Flash1}",
                            '-6deg',
                            '-6deg'
                        ],
                        [
                            "eid157",
                            "opacity",
                            1250,
                            145,
                            "easeInOutBack",
                            "${Slide_holder_Trans_BG}",
                            '0',
                            '0.698863685131073'
                        ],
                        [
                            "eid127",
                            "opacity",
                            500,
                            425,
                            "easeInOutBack",
                            "${Login_Button}",
                            '0',
                            '1'
                        ],
                        [
                            "eid146",
                            "top",
                            1763,
                            0,
                            "easeInOutBack",
                            "${Buttons_Movie}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid937",
                            "opacity",
                            4864,
                            60,
                            "easeInOutBack",
                            "${RoundRect2Copy2}",
                            '0',
                            '0.12'
                        ],
                        [
                            "eid142",
                            "scaleY",
                            1763,
                            0,
                            "easeInOutBack",
                            "${Buttons_Movie}",
                            '1.07',
                            '1.06965'
                        ],
                        [
                            "eid909",
                            "width",
                            4898,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_HolderCopy}",
                            '507px',
                            '507px'
                        ],
                        [
                            "eid1070",
                            "display",
                            2024,
                            0,
                            "easeOutExpo",
                            "${Flash_Movie}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1048",
                            "height",
                            991,
                            147,
                            "easeOutSine",
                            "${Flash2Copy}",
                            '62px',
                            '48px'
                        ],
                        [
                            "eid1049",
                            "height",
                            1138,
                            206,
                            "easeOutSine",
                            "${Flash2Copy}",
                            '500px',
                            '48px'
                        ],
                        [
                            "eid155",
                            "opacity",
                            1549,
                            214,
                            "easeInOutBack",
                            "${Home_Footer_Text}",
                            '0',
                            '0.6193181872367859'
                        ],
                        [
                            "eid227",
                            "display",
                            5000,
                            0,
                            "easeInOutBack",
                            "${Kellyman_Contact_Social_Media_Buttons}",
                            'block',
                            'none'
                        ],
                        [
                            "eid164",
                            "top",
                            1865,
                            0,
                            "easeInOutBack",
                            "${Logo}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid870",
                            "scaleX",
                            1000,
                            95,
                            "easeInOutBack",
                            "${LogoCopy2}",
                            '1.07797',
                            '0.9264'
                        ],
                        [
                            "eid865",
                            "scaleX",
                            2233,
                            0,
                            "easeInOutBack",
                            "${LogoCopy2}",
                            '0.9264',
                            '0.9264'
                        ],
                        [
                            "eid872",
                            "left",
                            1000,
                            95,
                            "easeInOutBack",
                            "${LogoCopy2}",
                            '16px',
                            '-13px'
                        ],
                        [
                            "eid869",
                            "left",
                            2233,
                            0,
                            "easeInOutBack",
                            "${LogoCopy2}",
                            '-13px',
                            '-13px'
                        ],
                        [
                            "eid385",
                            "scaleY",
                            4354,
                            570,
                            "easeInOutBack",
                            "${contact}",
                            '1.04259',
                            '1.03241'
                        ],
                        [
                            "eid1077",
                            "display",
                            500,
                            0,
                            "easeInOutBack",
                            "${testkellyman}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1076",
                            "display",
                            9500,
                            0,
                            "easeInOutBack",
                            "${testkellyman}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1062",
                            "filter.saturate",
                            1045,
                            0,
                            "easeOutExpo",
                            "${Flash1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid586",
                            "opacity",
                            9305,
                            246,
                            "easeInOutBack",
                            "${Testmonies_Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid931",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${callus}",
                            'none',
                            'none'
                        ],
                        [
                            "eid927",
                            "display",
                            6386,
                            0,
                            "easeInOutBack",
                            "${callus}",
                            'none',
                            'none'
                        ],
                        [
                            "eid928",
                            "display",
                            7566,
                            0,
                            "easeInOutBack",
                            "${callus}",
                            'none',
                            'block'
                        ],
                        [
                            "eid926",
                            "display",
                            7695,
                            0,
                            "easeInOutBack",
                            "${callus}",
                            'block',
                            'none'
                        ],
                        [
                            "eid151",
                            "clip",
                            1498,
                            265,
                            "easeInOutBack",
                            "${Buttons_Movie}",
                            [464.000244140625,485,804,0],
                            [464.000244140625,485,754.666748046875,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid943",
                            "display",
                            5000,
                            0,
                            "easeInOutBack",
                            "${RoundRect2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid934",
                            "scaleX",
                            4924,
                            0,
                            "easeInOutBack",
                            "${Kellyman_Contact_Child_Image}",
                            '1.20283',
                            '1.20283'
                        ],
                        [
                            "eid901",
                            "opacity",
                            4583,
                            245,
                            "easeInOutBack",
                            "${Social_Media}",
                            '0',
                            '1'
                        ],
                        [
                            "eid867",
                            "clip",
                            2233,
                            0,
                            "easeInOutBack",
                            "${LogoCopy2}",
                            [0,181.166748046875,119.83349609375,0],
                            [0,181.166748046875,119.83349609375,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid193",
                            "opacity",
                            2943,
                            307,
                            "easeInOutBack",
                            "${Kellyman_About_Trans_Photo}",
                            '0',
                            '0.45378130023219'
                        ],
                        [
                            "eid287",
                            "display",
                            6250,
                            0,
                            "easeInOutBack",
                            "${Services_Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid290",
                            "display",
                            6555,
                            0,
                            "easeInOutBack",
                            "${Services_Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid288",
                            "display",
                            6628,
                            0,
                            "easeInOutBack",
                            "${Services_Text}",
                            'block',
                            'block'
                        ],
                        [
                            "eid291",
                            "display",
                            6800,
                            0,
                            "easeInOutBack",
                            "${Services_Text}",
                            'block',
                            'block'
                        ],
                        [
                            "eid465",
                            "display",
                            7789,
                            0,
                            "easeInOutBack",
                            "${Services_Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid167",
                            "display",
                            2070,
                            0,
                            "easeInOutBack",
                            "${Buttons_Movie}",
                            'block',
                            'none'
                        ],
                        [
                            "eid878",
                            "opacity",
                            820,
                            0,
                            "easeInOutBack",
                            "${LogoCopy2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid879",
                            "opacity",
                            1000,
                            0,
                            "easeInOutBack",
                            "${LogoCopy2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid876",
                            "opacity",
                            1095,
                            68,
                            "easeInOutBack",
                            "${LogoCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1099",
                            "opacity",
                            4864,
                            60,
                            "easeInOutBack",
                            "${fbclick}",
                            '0',
                            '0.19658091103929'
                        ],
                        [
                            "eid289",
                            "opacity",
                            6555,
                            245,
                            "easeInOutBack",
                            "${Services_Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid205",
                            "display",
                            3808,
                            0,
                            "easeInOutBack",
                            "${About_Us_text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid336",
                            "display",
                            2024,
                            0,
                            "linear",
                            "${Blog_Click_Button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid195",
                            "opacity",
                            3185,
                            250,
                            "easeInOutBack",
                            "${Kellyman_About_Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid944",
                            "display",
                            5000,
                            0,
                            "easeInOutBack",
                            "${RoundRect2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid669",
                            "display",
                            7937,
                            0,
                            "linear",
                            "${Services_Stack}",
                            'block',
                            'none'
                        ],
                        [
                            "eid667",
                            "display",
                            8102,
                            0,
                            "linear",
                            "${Services_Stack}",
                            'none',
                            'none'
                        ],
                        [
                            "eid918",
                            "display",
                            7765,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_HolderCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid919",
                            "display",
                            9015,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_HolderCopy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid166",
                            "display",
                            2070,
                            0,
                            "easeInOutBack",
                            "${Slide_holder_Trans_BG}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1063",
                            "top",
                            1045,
                            0,
                            "easeOutExpo",
                            "${Flash1}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid1061",
                            "left",
                            1045,
                            0,
                            "easeOutExpo",
                            "${Flash1}",
                            '52px',
                            '52px'
                        ],
                        [
                            "eid455",
                            "scaleY",
                            7416,
                            0,
                            "easeInOutBack",
                            "${Services_Child_Picture}",
                            '1.37374',
                            '1.37374'
                        ],
                        [
                            "eid910",
                            "display",
                            3750,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_HolderCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid906",
                            "display",
                            5000,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_HolderCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid162",
                            "scaleY",
                            1865,
                            0,
                            "easeInOutBack",
                            "${Logo}",
                            '0.98887',
                            '0.98887'
                        ],
                        [
                            "eid935",
                            "left",
                            4924,
                            0,
                            "easeInOutBack",
                            "${Kellyman_Contact_Child_Image}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid174",
                            "scaleX",
                            1620,
                            245,
                            "easeInBack",
                            "${Banner_Image}",
                            '1.05459',
                            '1.053'
                        ],
                        [
                            "eid891",
                            "scaleX",
                            1865,
                            260,
                            "easeOutBack",
                            "${Banner_Image}",
                            '1.053',
                            '1.05182'
                        ],
                        [
                            "eid316",
                            "scaleX",
                            2125,
                            1563,
                            "easeInBack",
                            "${Banner_Image}",
                            '1.05182',
                            '1.0538'
                        ],
                        [
                            "eid892",
                            "scaleX",
                            3688,
                            62,
                            "easeInOutBack",
                            "${Banner_Image}",
                            '1.0538',
                            '1.05008'
                        ],
                        [
                            "eid894",
                            "scaleX",
                            3750,
                            58,
                            "easeInOutBack",
                            "${Banner_Image}",
                            '1.05008',
                            '1.05457'
                        ],
                        [
                            "eid896",
                            "scaleX",
                            3808,
                            1090,
                            "easeOutBack",
                            "${Banner_Image}",
                            '1.05457',
                            '1.05365'
                        ],
                        [
                            "eid283",
                            "top",
                            6405,
                            250,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_BlogCopy}",
                            '-1px',
                            '29px'
                        ],
                        [
                            "eid1094",
                            "top",
                            9750,
                            113,
                            "easeInOutBack",
                            "${Text2}",
                            '867px',
                            '787px'
                        ],
                        [
                            "eid319",
                            "top",
                            4898,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_Holder}",
                            '700px',
                            '700px'
                        ],
                        [
                            "eid697",
                            "top",
                            1526,
                            0,
                            "easeInOutBack",
                            "${Flash_Movie}",
                            '-181px',
                            '-181px'
                        ],
                        [
                            "eid946",
                            "top",
                            3688,
                            0,
                            "easeInOutBack",
                            "${Kellyman_About_Text}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid1056",
                            "filter.contrast",
                            991,
                            55,
                            "easeOutExpo",
                            "${Flash1}",
                            '1.7',
                            '1.8001018460724'
                        ],
                        [
                            "eid286",
                            "display",
                            6250,
                            0,
                            "easeInOutBack",
                            "${Blog_text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid239",
                            "display",
                            6683,
                            0,
                            "easeInOutBack",
                            "${Blog_text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1085",
                            "display",
                            9712,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_HolderCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1090",
                            "display",
                            9863,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_HolderCopy3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1086",
                            "display",
                            10962,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_HolderCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid206",
                            "top",
                            3808,
                            250,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_Contact}",
                            '-1px',
                            '29px'
                        ],
                        [
                            "eid598",
                            "opacity",
                            1250,
                            0,
                            "easeOutQuad",
                            "${Flash_Movie}",
                            '0.9400000166893',
                            '0.9400000166893'
                        ],
                        [
                            "eid905",
                            "top",
                            4898,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_HolderCopy}",
                            '760px',
                            '760px'
                        ],
                        [
                            "eid153",
                            "top",
                            1549,
                            214,
                            "easeInOutBack",
                            "${Home_Footer_Text}",
                            '801px',
                            '800px'
                        ],
                        [
                            "eid474",
                            "top",
                            8000,
                            250,
                            "easeInOutBack",
                            "${Gallery_Banner}",
                            '-1px',
                            '19px'
                        ],
                        [
                            "eid255",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${Kellyman_Back_Button}",
                            'none',
                            'none'
                        ],
                        [
                            "eid252",
                            "display",
                            2070,
                            0,
                            "easeInOutBack",
                            "${Kellyman_Back_Button}",
                            'none',
                            'none'
                        ],
                        [
                            "eid253",
                            "display",
                            2125,
                            0,
                            "easeInOutBack",
                            "${Kellyman_Back_Button}",
                            'none',
                            'block'
                        ],
                        [
                            "eid226",
                            "display",
                            5000,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_Holder}",
                            'block',
                            'none'
                        ],
                        [
                            "eid219",
                            "scaleX",
                            4629,
                            295,
                            "easeInOutBack",
                            "${Kellyman_Contact_Social_Media_Buttons}",
                            '0.03472',
                            '0.93542'
                        ],
                        [
                            "eid1102",
                            "display",
                            5000,
                            0,
                            "easeInOutBack",
                            "${instaclick}",
                            'block',
                            'none'
                        ],
                        [
                            "eid210",
                            "opacity",
                            4000,
                            245,
                            "easeInOutBack",
                            "${Contact_Us}",
                            '0',
                            '1'
                        ],
                        [
                            "eid871",
                            "scaleY",
                            1000,
                            95,
                            "easeInOutBack",
                            "${LogoCopy2}",
                            '1.11313',
                            '0.98887'
                        ],
                        [
                            "eid864",
                            "scaleY",
                            2233,
                            0,
                            "easeInOutBack",
                            "${LogoCopy2}",
                            '0.98887',
                            '0.98887'
                        ],
                        [
                            "eid1054",
                            "filter.sepia",
                            991,
                            54,
                            "easeOutExpo",
                            "${Flash1}",
                            '0',
                            '0.41666666666667'
                        ],
                        [
                            "eid1055",
                            "filter.sepia",
                            1045,
                            253,
                            "easeOutExpo",
                            "${Flash1}",
                            '0.416667',
                            '0.41'
                        ],
                        [
                            "eid475",
                            "opacity",
                            8000,
                            250,
                            "easeInOutBack",
                            "${Gallery_Banner}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1100",
                            "display",
                            5000,
                            0,
                            "easeInOutBack",
                            "${twitclick}",
                            'block',
                            'none'
                        ],
                        [
                            "eid215",
                            "opacity",
                            4409,
                            220,
                            "easeInOutBack",
                            "${Social_Media_Buttons_Holder}",
                            '0',
                            '0.92150539911094'
                        ],
                        [
                            "eid921",
                            "left",
                            8913,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_HolderCopy2}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid691",
                            "left",
                            1620,
                            0,
                            "easeInOutBack",
                            "${Banner_Image}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid317",
                            "left",
                            2125,
                            1563,
                            "easeInBack",
                            "${Banner_Image}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid893",
                            "left",
                            3688,
                            62,
                            "easeInOutBack",
                            "${Banner_Image}",
                            '12px',
                            '11px'
                        ],
                        [
                            "eid895",
                            "left",
                            3750,
                            58,
                            "easeInOutBack",
                            "${Banner_Image}",
                            '11px',
                            '12px'
                        ],
                        [
                            "eid897",
                            "left",
                            3808,
                            1090,
                            "easeOutBack",
                            "${Banner_Image}",
                            '12px',
                            '11px'
                        ],
                        [
                            "eid181",
                            "opacity",
                            2375,
                            245,
                            "easeInOutBack",
                            "${About_Us_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid125",
                            "left",
                            500,
                            425,
                            "easeInOutBack",
                            "${Login_Button}",
                            '140px',
                            '19px'
                        ],
                        [
                            "eid898",
                            "display",
                            3808,
                            0,
                            "easeInOutBack",
                            "${Social_Media}",
                            'block',
                            'none'
                        ],
                        [
                            "eid899",
                            "display",
                            4583,
                            0,
                            "easeInOutBack",
                            "${Social_Media}",
                            'none',
                            'block'
                        ],
                        [
                            "eid900",
                            "display",
                            5000,
                            0,
                            "easeInOutBack",
                            "${Social_Media}",
                            'block',
                            'none'
                        ],
                        [
                            "eid588",
                            "display",
                            9192,
                            0,
                            "easeInOutBack",
                            "${Testmonies_Banner}",
                            'none',
                            'block'
                        ],
                        [
                            "eid579",
                            "display",
                            9275,
                            0,
                            "easeInOutBack",
                            "${Testmonies_Banner}",
                            'none',
                            'block'
                        ],
                        [
                            "eid965",
                            "opacity",
                            8632,
                            368,
                            "easeInOutBack",
                            "${viiewgal}",
                            '0',
                            '1'
                        ],
                        [
                            "eid338",
                            "display",
                            2024,
                            0,
                            "linear",
                            "${Testimonies_Click_Button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1105",
                            "top",
                            7661,
                            0,
                            "easeOutCirc",
                            "${Services_Stack}",
                            '143px',
                            '143px'
                        ],
                        [
                            "eid1106",
                            "top",
                            7669,
                            0,
                            "easeOutCirc",
                            "${Services_Stack}",
                            '143px',
                            '147px'
                        ],
                        [
                            "eid920",
                            "opacity",
                            7416,
                            220,
                            "easeInOutBack",
                            "${Social_Media_Buttons_HolderCopy2}",
                            '0',
                            '0.92150539911094'
                        ],
                        [
                            "eid1096",
                            "opacity",
                            9750,
                            113,
                            "easeInOutBack",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid883",
                            "display",
                            1000,
                            0,
                            "easeInOutBack",
                            "${Logo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid884",
                            "display",
                            1107,
                            0,
                            "easeInOutBack",
                            "${Logo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid942",
                            "display",
                            5000,
                            0,
                            "easeInOutBack",
                            "${RoundRect2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid144",
                            "left",
                            1763,
                            0,
                            "easeInOutBack",
                            "${Buttons_Movie}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid372",
                            "display",
                            4354,
                            0,
                            "easeInOutBack",
                            "${contact}",
                            'none',
                            'block'
                        ],
                        [
                            "eid393",
                            "display",
                            5000,
                            0,
                            "easeInOutBack",
                            "${contact}",
                            'block',
                            'none'
                        ],
                        [
                            "eid187",
                            "scaleX",
                            2620,
                            380,
                            "easeInOutBack",
                            "${Kellyman_About_Photo_Children}",
                            '0.01537',
                            '1.05'
                        ],
                        [
                            "eid320",
                            "left",
                            4898,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_Holder}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid1044",
                            "top",
                            1138,
                            206,
                            "easeOutSine",
                            "${Flash2Copy}",
                            '-190px',
                            '36px'
                        ],
                        [
                            "eid207",
                            "opacity",
                            3808,
                            250,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_Contact}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1051",
                            "left",
                            1138,
                            206,
                            "easeOutSine",
                            "${Flash2Copy}",
                            '-185px',
                            '45px'
                        ],
                        [
                            "eid173",
                            "background-color",
                            2125,
                            0,
                            "easeInOutBack",
                            "${APP_BG_Layer}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid386",
                            "top",
                            4354,
                            570,
                            "easeInOutBack",
                            "${contact}",
                            '154px',
                            '151px'
                        ],
                        [
                            "eid939",
                            "opacity",
                            4864,
                            60,
                            "easeInOutBack",
                            "${RoundRect2Copy}",
                            '0',
                            '0.12'
                        ],
                        [
                            "eid197",
                            "top",
                            3435,
                            253,
                            "easeInOutBack",
                            "${Kellyman_About_View_Profile_Button}",
                            '74px',
                            '49px'
                        ],
                        [
                            "eid337",
                            "display",
                            2024,
                            0,
                            "linear",
                            "${Services_Click_Button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid224",
                            "scaleY",
                            4924,
                            0,
                            "easeInOutBack",
                            "${Kellyman_Contact_Social_Media_Buttons}",
                            '1.03396',
                            '1.03396'
                        ],
                        [
                            "eid213",
                            "opacity",
                            4195,
                            255,
                            "easeInOutBack",
                            "${Kellyman_Contact_Child_Image}",
                            '0.017045454545455',
                            '1'
                        ],
                        [
                            "eid1065",
                            "filter.blur",
                            991,
                            0,
                            "easeOutExpo",
                            "${Flash1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1066",
                            "filter.blur",
                            1045,
                            0,
                            "easeOutExpo",
                            "${Flash1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid254",
                            "display",
                            2070,
                            0,
                            "easeInOutBack",
                            "${Login_Button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid922",
                            "width",
                            8913,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_HolderCopy2}",
                            '507px',
                            '507px'
                        ],
                        [
                            "eid208",
                            "display",
                            3808,
                            0,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_Contact}",
                            'none',
                            'block'
                        ],
                        [
                            "eid228",
                            "display",
                            5000,
                            0,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_Contact}",
                            'block',
                            'none'
                        ],
                        [
                            "eid177",
                            "top",
                            2125,
                            250,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_About}",
                            '-1px',
                            '29px'
                        ],
                        [
                            "eid941",
                            "opacity",
                            4864,
                            60,
                            "easeInOutBack",
                            "${RoundRect2}",
                            '0',
                            '0.11965811965812'
                        ],
                        [
                            "eid1059",
                            "opacity",
                            991,
                            54,
                            "easeOutExpo",
                            "${Flash1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1060",
                            "opacity",
                            1045,
                            198,
                            "easeOutExpo",
                            "${Flash1}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid231",
                            "opacity",
                            5037,
                            250,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_Blog}",
                            '0',
                            '1'
                        ],
                        [
                            "eid930",
                            "top",
                            7566,
                            103,
                            "easeInOutBack",
                            "${callus}",
                            '162px',
                            '82px'
                        ],
                        [
                            "eid292",
                            "display",
                            6750,
                            0,
                            "linear",
                            "${Services_Child_Picture}",
                            'block',
                            'none'
                        ],
                        [
                            "eid293",
                            "display",
                            6800,
                            0,
                            "linear",
                            "${Services_Child_Picture}",
                            'none',
                            'block'
                        ],
                        [
                            "eid466",
                            "display",
                            7789,
                            0,
                            "easeInOutBack",
                            "${Services_Child_Picture}",
                            'block',
                            'none'
                        ],
                        [
                            "eid392",
                            "clip",
                            4354,
                            570,
                            "easeInOutBack",
                            "${contact}",
                            [0,444,-0.9604926109313965,0],
                            [0,444,540,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid160",
                            "clip",
                            1865,
                            0,
                            "easeInOutBack",
                            "${Logo}",
                            [0,181.166748046875,119.83349609375,0],
                            [0,181.166748046875,119.83349609375,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid203",
                            "display",
                            3808,
                            0,
                            "easeInOutBack",
                            "${Kellyman_About_View_Profile_Button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid888",
                            "display",
                            2125,
                            0,
                            "easeInOutBack",
                            "${content}",
                            'block',
                            'none'
                        ],
                        [
                            "eid873",
                            "top",
                            1000,
                            95,
                            "easeInOutBack",
                            "${LogoCopy2}",
                            '40px',
                            '0px'
                        ],
                        [
                            "eid863",
                            "top",
                            2233,
                            0,
                            "easeInOutBack",
                            "${LogoCopy2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid321",
                            "width",
                            4898,
                            0,
                            "easeInOutBack",
                            "${Social_Media_Buttons_Holder}",
                            '507px',
                            '507px'
                        ],
                        [
                            "eid499",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${Mobile_Home_Mid_HolderCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid500",
                            "display",
                            1250,
                            0,
                            "easeInOutBack",
                            "${Mobile_Home_Mid_HolderCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid501",
                            "display",
                            2070,
                            0,
                            "easeInOutBack",
                            "${Mobile_Home_Mid_HolderCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid201",
                            "display",
                            3808,
                            0,
                            "easeInOutBack",
                            "${Kellyman_About_Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid280",
                            "display",
                            6405,
                            0,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_BlogCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid281",
                            "display",
                            7597,
                            0,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_BlogCopy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid696",
                            "display",
                            7610,
                            0,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_BlogCopy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid695",
                            "display",
                            7619,
                            0,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_BlogCopy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid694",
                            "display",
                            7638,
                            0,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_BlogCopy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid693",
                            "display",
                            7661,
                            0,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_BlogCopy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid655",
                            "display",
                            7669,
                            0,
                            "linear",
                            "${Page_Banner_Generic_Sub_Bar_BlogCopy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid692",
                            "display",
                            7680,
                            0,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_BlogCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid656",
                            "display",
                            7978,
                            0,
                            "linear",
                            "${Page_Banner_Generic_Sub_Bar_BlogCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid140",
                            "scaleX",
                            1763,
                            0,
                            "easeInOutBack",
                            "${Buttons_Movie}",
                            '1.06',
                            '1.06186'
                        ],
                        [
                            "eid581",
                            "opacity",
                            9192,
                            250,
                            "easeInOutBack",
                            "${Testmonies_Banner}",
                            '0',
                            '1'
                        ],
                        [
                            "eid240",
                            "opacity",
                            5250,
                            245,
                            "easeInOutBack",
                            "${Blog_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid230",
                            "top",
                            5037,
                            250,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_Blog}",
                            '-1px',
                            '36px'
                        ],
                        [
                            "eid969",
                            "top",
                            8632,
                            368,
                            "easeInOutBack",
                            "${viiewgal}",
                            '-216px',
                            '143px'
                        ],
                        [
                            "eid223",
                            "opacity",
                            4629,
                            295,
                            "easeInOutBack",
                            "${Kellyman_Contact_Social_Media_Buttons}",
                            '0',
                            '1'
                        ],
                        [
                            "eid651",
                            "opacity",
                            7580,
                            89,
                            "linear",
                            "${Services_Stack}",
                            '0',
                            '1'
                        ],
                        [
                            "eid932",
                            "scaleX",
                            4354,
                            570,
                            "easeInOutBack",
                            "${contact}",
                            '1.1402',
                            '1.13577'
                        ],
                        [
                            "eid907",
                            "opacity",
                            3435,
                            220,
                            "easeInOutBack",
                            "${Social_Media_Buttons_HolderCopy}",
                            '0',
                            '0.92150539911094'
                        ],
                        [
                            "eid593",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${updateholder}",
                            'none',
                            'none'
                        ],
                        [
                            "eid594",
                            "display",
                            5037,
                            0,
                            "easeInOutBack",
                            "${updateholder}",
                            'none',
                            'block'
                        ],
                        [
                            "eid592",
                            "display",
                            6229,
                            0,
                            "easeInOutBack",
                            "${updateholder}",
                            'block',
                            'none'
                        ],
                        [
                            "eid582",
                            "top",
                            9192,
                            250,
                            "easeInOutBack",
                            "${Testmonies_Banner}",
                            '-1px',
                            '19px'
                        ],
                        [
                            "eid456",
                            "top",
                            7416,
                            0,
                            "easeInOutBack",
                            "${Services_Child_Picture}",
                            '185px',
                            '185px'
                        ],
                        [
                            "eid335",
                            "display",
                            2024,
                            0,
                            "linear",
                            "${About_Click_Button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1058",
                            "scaleX",
                            991,
                            55,
                            "easeOutExpo",
                            "${Flash1}",
                            '1',
                            '7.02993'
                        ],
                        [
                            "eid333",
                            "display",
                            2024,
                            0,
                            "linear",
                            "${Galleries_Click_Button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid236",
                            "left",
                            0,
                            0,
                            "easeInOutBack",
                            "${Slide_holder_Trans_BG}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid209",
                            "display",
                            3808,
                            0,
                            "easeInOutBack",
                            "${Contact_Us}",
                            'block',
                            'none'
                        ],
                        [
                            "eid211",
                            "display",
                            4000,
                            0,
                            "easeInOutBack",
                            "${Contact_Us}",
                            'none',
                            'block'
                        ],
                        [
                            "eid229",
                            "display",
                            5000,
                            0,
                            "easeInOutBack",
                            "${Contact_Us}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1103",
                            "opacity",
                            4864,
                            60,
                            "easeInOutBack",
                            "${instaclick}",
                            '0',
                            '0.19658091103929'
                        ],
                        [
                            "eid225",
                            "display",
                            5000,
                            0,
                            "easeInOutBack",
                            "${Kellyman_Contact_Child_Image}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1068",
                            "volume",
                            991,
                            0,
                            "easeOutSine",
                            "${camera-shutter-click-052}",
                            '0.24360655737705',
                            '0.24360655737705'
                        ],
                        [
                            "eid1067",
                            "volume",
                            1298,
                            0,
                            "easeOutSine",
                            "${camera-shutter-click-052}",
                            '0.24360655737705',
                            '0'
                        ],
                        [
                            "eid591",
                            "top",
                            8426,
                            0,
                            "easeInOutBack",
                            "${updateholder}",
                            '179px',
                            '179px'
                        ],
                        [
                            "eid933",
                            "left",
                            4354,
                            275,
                            "easeInBack",
                            "${contact}",
                            '29px',
                            '34px'
                        ],
                        [
                            "eid1104",
                            "left",
                            4629,
                            295,
                            "easeOutBack",
                            "${contact}",
                            '34px',
                            '31px'
                        ],
                        [
                            "eid334",
                            "display",
                            2024,
                            0,
                            "linear",
                            "${Contact_Click_Button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid204",
                            "display",
                            3808,
                            0,
                            "easeInOutBack",
                            "${Page_Banner_Generic_Sub_Bar_About}",
                            'block',
                            'none'
                        ],
                        [
                            "eid168",
                            "display",
                            2070,
                            0,
                            "easeInOutBack",
                            "${Home_Footer_Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid199",
                            "opacity",
                            3435,
                            253,
                            "easeInOutBack",
                            "${Kellyman_About_View_Profile_Button}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1045",
                            "opacity",
                            991,
                            0,
                            "linear",
                            "${Flash2Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1046",
                            "opacity",
                            1138,
                            51,
                            "easeOutSine",
                            "${Flash2Copy}",
                            '1',
                            '0.82051282051282'
                        ],
                        [
                            "eid1047",
                            "opacity",
                            1190,
                            155,
                            "easeOutSine",
                            "${Flash2Copy}",
                            '0.82051282051282',
                            '0'
                        ],
                        [
                            "eid189",
                            "left",
                            2620,
                            380,
                            "easeInOutBack",
                            "${Kellyman_About_Photo_Children}",
                            '1px',
                            '12px'
                        ],
                        [
                            "eid161",
                            "scaleX",
                            1865,
                            0,
                            "easeInOutBack",
                            "${Logo}",
                            '0.9264',
                            '0.9264'
                        ],
                        [
                            "eid1091",
                            "display",
                            9109,
                            0,
                            "easeInOutBack",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1092",
                            "display",
                            9750,
                            0,
                            "easeInOutBack",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1097",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${testmonies}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1078",
                            "display",
                            9598,
                            0,
                            "linear",
                            "${testmonies}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1083",
                            "display",
                            9611,
                            0,
                            "easeInOutBack",
                            "${testmonies}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1082",
                            "display",
                            9678,
                            0,
                            "easeInOutBack",
                            "${testmonies}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1079",
                            "display",
                            9746,
                            0,
                            "linear",
                            "${testmonies}",
                            'block',
                            'block'
                        ],
                            [ "eid975", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${content}', [] ] ],
                            [ "eid976", "trigger", 991, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${content}', [] ] ],
                            [ "eid1069", "trigger", 991, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${camera-shutter-click-052}', [] ] ]
                    ]
                }
            },
            "Buttons_Holders": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            rect: [5, 0, '158px', '96px', 'auto', 'auto'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            rect: [218, 0, '158px', '96px', 'auto', 'auto'],
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            rect: [0, 118, '158px', '96px', 'auto', 'auto'],
                            id: 'RoundRectCopy4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            rect: [218, 118, '158px', '96px', 'auto', 'auto'],
                            id: 'RoundRectCopy3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            rect: [0, 242, '158px', '96px', 'auto', 'auto'],
                            id: 'RoundRectCopy6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            rect: [218, 242, '158px', '96px', 'auto', 'auto'],
                            id: 'RoundRectCopy5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'none',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 376, 338]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid91",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${RoundRect}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid92",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${RoundRectCopy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid41",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRectCopy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${RoundRectCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid38",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRectCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid88",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${RoundRectCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid90",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${RoundRect}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid40",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRectCopy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid87",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${RoundRectCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid42",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRectCopy6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid85",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${RoundRectCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid43",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRectCopy5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid84",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${RoundRectCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            'none',
                            'none'
                        ],
                        [
                            "eid89",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${RoundRect}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Buttons_Movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Services_Button',
                            rect: [0, 4, '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(447.5px 225px 550px 32.5px)',
                            fill: ['rgba(0,0,0,0)', 'images/Services%20Button.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Galleries__Button',
                            rect: [5, 0, '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(447.5px 455px 552.5px 270px)',
                            fill: ['rgba(0,0,0,0)', 'images/Galleries%20%20Button.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Contact_Button',
                            rect: [0, 4, '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(542.5px 225px 647.5px 35px)',
                            fill: ['rgba(0,0,0,0)', 'images/Contact%20Button.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Blog_Button',
                            rect: [0, 4, '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(647.5px 220px 755px 32.5px)',
                            fill: ['rgba(0,0,0,0)', 'images/Blog%20Button.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'About_Us_Button',
                            rect: [2, 2, '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(545px 455px 647.5px 272.5px)',
                            fill: ['rgba(0,0,0,0)', 'images/About%20Us%20Button.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Testimonials_Button',
                            rect: [2, 4, '480px', '800px', 'auto', 'auto'],
                            clip: 'rect(635px 457.5px 755px 265px)',
                            fill: ['rgba(0,0,0,0)', 'images/Testimonials%20Button.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 485, 804]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "blog2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.79858', '0.98145', 1], ['50%', '50%']],
                            rect: [-56, 3, 547, 532, 'auto', 'auto'],
                            borderRadius: ['0px 0px', '0px 0px', '0px 0px', '0px 0px'],
                            type: 'rect',
                            id: 'container2',
                            opacity: '0.94000001907349',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, 436, 530]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "blog2_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'container3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: [0, 5, 503, 373, 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 505, 616]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "conview": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1', '1.0477', 1], ['50%', '50%']],
                            type: 'rect',
                            display: 'block',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'contactframe',
                            opacity: '0',
                            rect: [0, 13, 479, 543, 'auto', 'auto'],
                            fill: ['rgba(152,146,146,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 479, 569]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid370",
                            "background-color",
                            4898,
                            0,
                            "easeInOutBack",
                            "${contactframe}",
                            'rgba(152,146,146,1.00)',
                            'rgba(152,146,146,1.00)'
                        ],
                        [
                            "eid360",
                            "display",
                            3773,
                            0,
                            "easeInOutBack",
                            "${contactframe}",
                            'block',
                            'none'
                        ],
                        [
                            "eid361",
                            "display",
                            4728,
                            0,
                            "easeInOutBack",
                            "${contactframe}",
                            'none',
                            'block'
                        ],
                        [
                            "eid366",
                            "display",
                            5000,
                            0,
                            "easeInOutBack",
                            "${contactframe}",
                            'block',
                            'block'
                        ],
                        [
                            "eid363",
                            "top",
                            4728,
                            170,
                            "easeInOutBack",
                            "${contactframe}",
                            '13px',
                            '601px'
                        ],
                        [
                            "eid365",
                            "opacity",
                            4728,
                            170,
                            "easeInOutBack",
                            "${contactframe}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "blog2_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '444px', 540, 'auto', 'auto'],
                            id: 'contactview',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 444, 540]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "slide_movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [2, 69, 480, 0, 'auto', 'auto'],
                            display: 'block',
                            id: 'Slide_holder',
                            opacity: '0',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(15,15,15,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'Slide2',
                            opacity: '0',
                            rect: [2, 76, 480, '362px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Slide2.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.0476', 1, 1], ['50%', '50%']],
                            rect: [-2, 76, 480, '362px', 'auto', 'auto'],
                            id: 'Slide1',
                            opacity: '0',
                            clip: 'rect(0px 473.116943359375px 359px 12.876307487487793px)',
                            fill: ['rgba(0,0,0,0)', 'images/Slide1.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, 0, 0]
                        }
                    }
                },
                timeline: {
                    duration: 14500,
                    autoPlay: true,
                    data: [
                        [
                            "eid432",
                            "opacity",
                            7000,
                            500,
                            "easeInOutBack",
                            "${Slide1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid437",
                            "opacity",
                            7500,
                            6500,
                            "easeInOutBack",
                            "${Slide1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid438",
                            "opacity",
                            14000,
                            500,
                            "easeInOutBack",
                            "${Slide1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "opacity",
                            855,
                            395,
                            "easeInOutBack",
                            "${Slide_holder}",
                            '0',
                            '0.9600000381469727'
                        ],
                        [
                            "eid129",
                            "height",
                            855,
                            395,
                            "easeInOutBack",
                            "${Slide_holder}",
                            '0px',
                            '353px'
                        ],
                        [
                            "eid452",
                            "scaleX",
                            14500,
                            0,
                            "easeInOutBack",
                            "${Slide1}",
                            '1.0476',
                            '1.0476'
                        ],
                        [
                            "eid453",
                            "left",
                            14500,
                            0,
                            "easeInOutBack",
                            "${Slide1}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid425",
                            "opacity",
                            0,
                            250,
                            "easeInOutBack",
                            "${Slide2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid430",
                            "opacity",
                            7000,
                            500,
                            "easeInOutBack",
                            "${Slide2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid449",
                            "clip",
                            14500,
                            0,
                            "easeInOutBack",
                            "${Slide1}",
                            [0,473.116943359375,359,12.876307487487793],
                            [0,473.116943359375,359,12.876307487487793],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid423",
                            "left",
                            1500,
                            0,
                            "easeInOutBack",
                            "${Slide_holder}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid165",
                            "display",
                            2070,
                            0,
                            "easeInOutBack",
                            "${Slide_holder}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "Flash_Movie": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [252, 801, 66, 62, 'auto', 'auto'],
                            filter: ['0', '0deg', '1', '1', '0', '0', '0', '1px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            fi: ['0', '0deg', '1', '1', '0', '0', '0', '1px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            id: 'Flash2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Flash.png', '0px', '0px']
                        },
                        {
                            rect: [285, 582, 66, 62, 'auto', 'auto'],
                            filter: ['0', '0deg', '1', '1', '0', '0', '0', '1px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            fi: ['0', '0deg', '1', '1', '0', '0', '0', '1px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            id: 'Flash2Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Flash.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], [1, 1, 1], ['48.67%', '45.96%']],
                            id: 'Flash2Copy4',
                            opacity: '0',
                            rect: [2, -7, 66, 62, 'auto', 'auto'],
                            fi: ['0', '0deg', '1', '1', '0', '0', '0', '1px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            type: 'image',
                            filter: ['0', '0deg', '1', '1', '0', '0', '0', '1px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            fill: ['rgba(0,0,0,0)', 'images/Flash.png', '0px', '0px']
                        },
                        {
                            rect: [530, 818, 66, 62, 'auto', 'auto'],
                            filter: ['0', '0deg', '1', '1', '0', '0', '0', '1px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            fi: ['0', '0deg', '1', '1', '0', '0', '0', '1px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            id: 'Flash2Copy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Flash.png', '0px', '0px']
                        },
                        {
                            rect: [292, 478, 66, 62, 'auto', 'auto'],
                            filter: ['0', '0deg', '1', '1', '0', '0', '0', '1px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            fi: ['0', '0deg', '1', '1', '0', '0', '0', '1px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            id: 'Flash2Copy3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Flash.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], ['-6', 0, 0], [0, 0], ['1', '1', 1], ['50%', '50%']],
                            id: 'Flash1',
                            opacity: '0.000000',
                            rect: [399, 697, 66, 62, 'auto', 'auto'],
                            fi: ['0', '0deg', '1.7', '0', '0', '0', '0', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            type: 'image',
                            filter: ['0', '0deg', '1.7', '0', '0', '0', '0', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            fill: ['rgba(0,0,0,0)', 'images/Flash.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], ['-6', 0, 0], [0, 0], ['1', '1', 1], ['50%', '50%']],
                            id: 'Flash1Copy2',
                            opacity: '0.000000',
                            rect: [259, 687, 66, 62, 'auto', 'auto'],
                            fi: ['0', '0deg', '1.7', '0', '0', '0', '0', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            type: 'image',
                            filter: ['0', '0deg', '1.7', '0', '0', '0', '0', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            fill: ['rgba(0,0,0,0)', 'images/Flash.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], ['-6', 0, 0], [0, 0], ['1', '1', 1], ['50%', '50%']],
                            id: 'Flash1Copy',
                            opacity: '0.000000',
                            rect: [239, 207, 66, 62, 'auto', 'auto'],
                            fi: ['0', '0deg', '1.7', '0', '0', '0', '0', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            type: 'image',
                            filter: ['0', '0deg', '1.7', '0', '0', '0', '0', '0px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            fill: ['rgba(0,0,0,0)', 'images/Flash.png', '0px', '0px']
                        },
                        {
                            type: 'audio',
                            source: ['media/camera-shutter-click-05.mp3', 'media/camera-shutter-click-05.wav'],
                            id: 'camera-shutter-click-05',
                            preload: 'metadata',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            volume: '0.24',
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 540, 500]
                        }
                    }
                },
                timeline: {
                    duration: 2277,
                    autoPlay: true,
                    data: [
                        [
                            "eid801",
                            "filter.blur",
                            1379,
                            0,
                            "easeOutExpo",
                            "${Flash1Copy2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid802",
                            "filter.blur",
                            1425,
                            0,
                            "easeOutExpo",
                            "${Flash1Copy2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid505",
                            "height",
                            1500,
                            166,
                            "easeOutExpo",
                            "${Flash2}",
                            '62px',
                            '48px'
                        ],
                        [
                            "eid530",
                            "height",
                            1666,
                            232,
                            "easeOutExpo",
                            "${Flash2}",
                            '500px',
                            '48px'
                        ],
                        [
                            "eid779",
                            "filter.contrast",
                            1087,
                            55,
                            "easeOutExpo",
                            "${Flash1Copy}",
                            '1.7',
                            '1.8001018460724'
                        ],
                        [
                            "eid747",
                            "top",
                            1408,
                            206,
                            "easeOutExpo",
                            "${Flash2Copy}",
                            '582px',
                            '801px'
                        ],
                        [
                            "eid756",
                            "left",
                            1408,
                            206,
                            "easeOutExpo",
                            "${Flash2Copy}",
                            '285px',
                            '513px'
                        ],
                        [
                            "eid800",
                            "scaleY",
                            1379,
                            46,
                            "easeOutExpo",
                            "${Flash1Copy2}",
                            '1',
                            '6.54906'
                        ],
                        [
                            "eid742",
                            "rotateZ",
                            1786,
                            0,
                            "easeOutExpo",
                            "${Flash1}",
                            '-6deg',
                            '-6deg'
                        ],
                        [
                            "eid817",
                            "top",
                            1887,
                            18,
                            "easeOutExpo",
                            "${Flash2Copy3}",
                            '478px',
                            '570px'
                        ],
                        [
                            "eid818",
                            "top",
                            1904,
                            19,
                            "easeOutExpo",
                            "${Flash2Copy3}",
                            '570px',
                            '635px'
                        ],
                        [
                            "eid819",
                            "top",
                            1923,
                            169,
                            "easeOutExpo",
                            "${Flash2Copy3}",
                            '635px',
                            '687px'
                        ],
                        [
                            "eid524",
                            "opacity",
                            1500,
                            0,
                            "linear",
                            "${Flash2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid531",
                            "opacity",
                            1666,
                            58,
                            "easeOutExpo",
                            "${Flash2}",
                            '1',
                            '0.82051282051282'
                        ],
                        [
                            "eid534",
                            "opacity",
                            1724,
                            175,
                            "easeOutExpo",
                            "${Flash2}",
                            '0.82051282051282',
                            '0'
                        ],
                        [
                            "eid829",
                            "width",
                            1739,
                            147,
                            "easeOutExpo",
                            "${Flash2Copy3}",
                            '66px',
                            '68px'
                        ],
                        [
                            "eid830",
                            "width",
                            1887,
                            206,
                            "easeOutExpo",
                            "${Flash2Copy3}",
                            '540px',
                            '68px'
                        ],
                        [
                            "eid810",
                            "left",
                            2071,
                            18,
                            "easeOutExpo",
                            "${Flash2Copy2}",
                            '530px',
                            '394px'
                        ],
                        [
                            "eid813",
                            "left",
                            2089,
                            19,
                            "easeOutExpo",
                            "${Flash2Copy2}",
                            '394px',
                            '455px'
                        ],
                        [
                            "eid815",
                            "left",
                            2108,
                            169,
                            "easeOutExpo",
                            "${Flash2Copy2}",
                            '455px',
                            '524px'
                        ],
                        [
                            "eid811",
                            "width",
                            1923,
                            147,
                            "easeOutExpo",
                            "${Flash2Copy2}",
                            '66px',
                            '68px'
                        ],
                        [
                            "eid812",
                            "width",
                            2071,
                            206,
                            "easeOutExpo",
                            "${Flash2Copy2}",
                            '540px',
                            '68px'
                        ],
                        [
                            "eid763",
                            "filter.blur",
                            1527,
                            0,
                            "easeOutExpo",
                            "${Flash1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid764",
                            "filter.blur",
                            1573,
                            0,
                            "easeOutExpo",
                            "${Flash1}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid511",
                            "width",
                            1500,
                            166,
                            "easeOutExpo",
                            "${Flash2}",
                            '66px',
                            '68px'
                        ],
                        [
                            "eid533",
                            "width",
                            1666,
                            232,
                            "easeOutExpo",
                            "${Flash2}",
                            '540px',
                            '68px'
                        ],
                        [
                            "eid765",
                            "top",
                            1572,
                            0,
                            "easeOutExpo",
                            "${Flash1}",
                            '697px',
                            '697px'
                        ],
                        [
                            "eid793",
                            "rotateZ",
                            1638,
                            0,
                            "easeOutExpo",
                            "${Flash1Copy2}",
                            '-6deg',
                            '-6deg'
                        ],
                        [
                            "eid766",
                            "left",
                            1572,
                            0,
                            "easeOutExpo",
                            "${Flash1}",
                            '399px',
                            '399px'
                        ],
                        [
                            "eid790",
                            "filter.sepia",
                            1379,
                            46,
                            "easeOutExpo",
                            "${Flash1Copy2}",
                            '0',
                            '0.41666666666667'
                        ],
                        [
                            "eid791",
                            "filter.sepia",
                            1425,
                            213,
                            "easeOutExpo",
                            "${Flash1Copy2}",
                            '0.416667',
                            '0.41'
                        ],
                        [
                            "eid720",
                            "opacity",
                            1527,
                            46,
                            "easeOutExpo",
                            "${Flash1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid719",
                            "opacity",
                            1573,
                            167,
                            "easeOutExpo",
                            "${Flash1}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid509",
                            "left",
                            1500,
                            115,
                            "easeOutExpo",
                            "${Flash2}",
                            '252px',
                            '251px'
                        ],
                        [
                            "eid618",
                            "left",
                            1615,
                            23,
                            "easeOutExpo",
                            "${Flash2}",
                            '251px',
                            '252px'
                        ],
                        [
                            "eid770",
                            "left",
                            1638,
                            14,
                            "easeOutExpo",
                            "${Flash2}",
                            '252px',
                            '260px'
                        ],
                        [
                            "eid771",
                            "left",
                            1652,
                            14,
                            "easeOutExpo",
                            "${Flash2}",
                            '260px',
                            '25px'
                        ],
                        [
                            "eid532",
                            "left",
                            1666,
                            21,
                            "easeOutExpo",
                            "${Flash2}",
                            '25px',
                            '133px'
                        ],
                        [
                            "eid773",
                            "left",
                            1687,
                            16,
                            "easeOutExpo",
                            "${Flash2}",
                            '133px',
                            '182px'
                        ],
                        [
                            "eid776",
                            "left",
                            1703,
                            21,
                            "easeOutExpo",
                            "${Flash2}",
                            '182px',
                            '218px'
                        ],
                        [
                            "eid761",
                            "left",
                            1724,
                            174,
                            "easeOutExpo",
                            "${Flash2}",
                            '218px',
                            '259px'
                        ],
                        [
                            "eid751",
                            "height",
                            1261,
                            147,
                            "easeOutExpo",
                            "${Flash2Copy}",
                            '62px',
                            '48px'
                        ],
                        [
                            "eid752",
                            "height",
                            1408,
                            206,
                            "easeOutExpo",
                            "${Flash2Copy}",
                            '500px',
                            '48px'
                        ],
                        [
                            "eid821",
                            "height",
                            1739,
                            147,
                            "easeOutExpo",
                            "${Flash2Copy3}",
                            '62px',
                            '48px'
                        ],
                        [
                            "eid822",
                            "height",
                            1887,
                            206,
                            "easeOutExpo",
                            "${Flash2Copy3}",
                            '500px',
                            '48px'
                        ],
                        [
                            "eid837",
                            "filter.blur",
                            988,
                            0,
                            "easeOutExpo",
                            "${Flash2Copy4}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid831",
                            "top",
                            988,
                            206,
                            "easeOutSine",
                            "${Flash2Copy4}",
                            '-7px',
                            '207px'
                        ],
                        [
                            "eid781",
                            "scaleX",
                            1087,
                            55,
                            "easeOutExpo",
                            "${Flash1Copy}",
                            '1',
                            '7.02993'
                        ],
                        [
                            "eid507",
                            "top",
                            1500,
                            115,
                            "easeOutExpo",
                            "${Flash2}",
                            '801px',
                            '805px'
                        ],
                        [
                            "eid617",
                            "top",
                            1615,
                            23,
                            "easeOutExpo",
                            "${Flash2}",
                            '805px',
                            '811px'
                        ],
                        [
                            "eid769",
                            "top",
                            1638,
                            14,
                            "easeOutExpo",
                            "${Flash2}",
                            '811px',
                            '801px'
                        ],
                        [
                            "eid772",
                            "top",
                            1652,
                            14,
                            "easeOutExpo",
                            "${Flash2}",
                            '801px',
                            '602px'
                        ],
                        [
                            "eid529",
                            "top",
                            1666,
                            21,
                            "easeOutExpo",
                            "${Flash2}",
                            '602px',
                            '690px'
                        ],
                        [
                            "eid774",
                            "top",
                            1687,
                            16,
                            "easeOutExpo",
                            "${Flash2}",
                            '690px',
                            '749px'
                        ],
                        [
                            "eid775",
                            "top",
                            1703,
                            21,
                            "easeOutExpo",
                            "${Flash2}",
                            '749px',
                            '767px'
                        ],
                        [
                            "eid762",
                            "top",
                            1724,
                            174,
                            "easeOutExpo",
                            "${Flash2}",
                            '767px',
                            '810px'
                        ],
                        [
                            "eid787",
                            "scaleY",
                            1087,
                            55,
                            "easeOutExpo",
                            "${Flash1Copy}",
                            '1',
                            '6.54906'
                        ],
                        [
                            "eid744",
                            "filter.blur",
                            1666,
                            0,
                            "easeOutExpo",
                            "${Flash2}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid799",
                            "top",
                            1425,
                            0,
                            "easeOutExpo",
                            "${Flash1Copy2}",
                            '687px',
                            '687px'
                        ],
                        [
                            "eid832",
                            "opacity",
                            841,
                            0,
                            "linear",
                            "${Flash2Copy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid833",
                            "opacity",
                            988,
                            51,
                            "easeOutSine",
                            "${Flash2Copy4}",
                            '1',
                            '0.82051282051282'
                        ],
                        [
                            "eid834",
                            "opacity",
                            1040,
                            155,
                            "easeOutSine",
                            "${Flash2Copy4}",
                            '0.82051282051282',
                            '0'
                        ],
                        [
                            "eid820",
                            "filter.blur",
                            1886,
                            0,
                            "easeOutExpo",
                            "${Flash2Copy3}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid826",
                            "left",
                            1887,
                            18,
                            "easeOutExpo",
                            "${Flash2Copy3}",
                            '292px',
                            '389px'
                        ],
                        [
                            "eid827",
                            "left",
                            1904,
                            19,
                            "easeOutExpo",
                            "${Flash2Copy3}",
                            '389px',
                            '458px'
                        ],
                        [
                            "eid828",
                            "left",
                            1923,
                            169,
                            "easeOutExpo",
                            "${Flash2Copy3}",
                            '458px',
                            '524px'
                        ],
                        [
                            "eid798",
                            "filter.saturate",
                            1425,
                            0,
                            "easeOutExpo",
                            "${Flash1Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid786",
                            "top",
                            1141,
                            0,
                            "easeOutExpo",
                            "${Flash1Copy}",
                            '207px',
                            '207px'
                        ],
                        [
                            "eid784",
                            "left",
                            1141,
                            0,
                            "easeOutExpo",
                            "${Flash1Copy}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid984",
                            "volume",
                            841,
                            0,
                            "easeInOutBack",
                            "${camera-shutter-click-05}",
                            '0.24',
                            '0.24'
                        ],
                        [
                            "eid839",
                            "width",
                            841,
                            147,
                            "easeOutSine",
                            "${Flash2Copy4}",
                            '66px',
                            '68px'
                        ],
                        [
                            "eid840",
                            "width",
                            988,
                            206,
                            "easeOutSine",
                            "${Flash2Copy4}",
                            '540px',
                            '68px'
                        ],
                        [
                            "eid757",
                            "width",
                            1261,
                            147,
                            "easeOutExpo",
                            "${Flash2Copy}",
                            '66px',
                            '68px'
                        ],
                        [
                            "eid758",
                            "width",
                            1408,
                            206,
                            "easeOutExpo",
                            "${Flash2Copy}",
                            '540px',
                            '68px'
                        ],
                        [
                            "eid753",
                            "filter.blur",
                            1408,
                            0,
                            "easeOutExpo",
                            "${Flash2Copy}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid792",
                            "filter.contrast",
                            1379,
                            46,
                            "easeOutExpo",
                            "${Flash1Copy2}",
                            '1.7',
                            '1.8001018460724'
                        ],
                        [
                            "eid794",
                            "scaleX",
                            1379,
                            46,
                            "easeOutExpo",
                            "${Flash1Copy2}",
                            '1',
                            '7.02993'
                        ],
                        [
                            "eid739",
                            "filter.saturate",
                            1572,
                            0,
                            "easeOutExpo",
                            "${Flash1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid714",
                            "filter.sepia",
                            1527,
                            46,
                            "easeOutExpo",
                            "${Flash1}",
                            '0',
                            '0.41666666666667'
                        ],
                        [
                            "eid743",
                            "filter.sepia",
                            1573,
                            213,
                            "easeOutExpo",
                            "${Flash1}",
                            '0.416667',
                            '0.41'
                        ],
                        [
                            "eid715",
                            "scaleY",
                            1527,
                            46,
                            "easeOutExpo",
                            "${Flash1}",
                            '1',
                            '6.54906'
                        ],
                        [
                            "eid716",
                            "scaleX",
                            1527,
                            46,
                            "easeOutExpo",
                            "${Flash1}",
                            '1',
                            '7.02993'
                        ],
                        [
                            "eid777",
                            "filter.sepia",
                            1087,
                            55,
                            "easeOutExpo",
                            "${Flash1Copy}",
                            '0',
                            '0.41666666666667'
                        ],
                        [
                            "eid778",
                            "filter.sepia",
                            1141,
                            253,
                            "easeOutExpo",
                            "${Flash1Copy}",
                            '0.416667',
                            '0.41'
                        ],
                        [
                            "eid788",
                            "filter.blur",
                            1087,
                            0,
                            "easeOutExpo",
                            "${Flash1Copy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid789",
                            "filter.blur",
                            1141,
                            0,
                            "easeOutExpo",
                            "${Flash1Copy}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid807",
                            "height",
                            1923,
                            147,
                            "easeOutExpo",
                            "${Flash2Copy2}",
                            '62px',
                            '48px'
                        ],
                        [
                            "eid808",
                            "height",
                            2071,
                            206,
                            "easeOutExpo",
                            "${Flash2Copy2}",
                            '500px',
                            '48px'
                        ],
                        [
                            "eid982",
                            "display",
                            1766,
                            0,
                            "easeInOutBack",
                            "${camera-shutter-click-05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid983",
                            "display",
                            1832,
                            0,
                            "easeInOutBack",
                            "${camera-shutter-click-05}",
                            'block',
                            'block'
                        ],
                        [
                            "eid797",
                            "left",
                            1425,
                            0,
                            "easeOutExpo",
                            "${Flash1Copy2}",
                            '259px',
                            '259px'
                        ],
                        [
                            "eid804",
                            "opacity",
                            1923,
                            0,
                            "linear",
                            "${Flash2Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid805",
                            "opacity",
                            2071,
                            51,
                            "easeOutExpo",
                            "${Flash2Copy2}",
                            '1',
                            '0.82051282051282'
                        ],
                        [
                            "eid806",
                            "opacity",
                            2122,
                            155,
                            "easeOutExpo",
                            "${Flash2Copy2}",
                            '0.82051282051282',
                            '0'
                        ],
                        [
                            "eid823",
                            "opacity",
                            1739,
                            0,
                            "linear",
                            "${Flash2Copy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid824",
                            "opacity",
                            1887,
                            51,
                            "easeOutExpo",
                            "${Flash2Copy3}",
                            '1',
                            '0.82051282051282'
                        ],
                        [
                            "eid825",
                            "opacity",
                            1938,
                            155,
                            "easeOutExpo",
                            "${Flash2Copy3}",
                            '0.82051282051282',
                            '0'
                        ],
                        [
                            "eid795",
                            "opacity",
                            1379,
                            46,
                            "easeOutExpo",
                            "${Flash1Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid796",
                            "opacity",
                            1425,
                            167,
                            "easeOutExpo",
                            "${Flash1Copy2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid809",
                            "filter.blur",
                            2071,
                            0,
                            "easeOutExpo",
                            "${Flash2Copy2}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid785",
                            "filter.saturate",
                            1141,
                            0,
                            "easeOutExpo",
                            "${Flash1Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid835",
                            "height",
                            841,
                            147,
                            "easeOutSine",
                            "${Flash2Copy4}",
                            '62px',
                            '48px'
                        ],
                        [
                            "eid836",
                            "height",
                            988,
                            206,
                            "easeOutSine",
                            "${Flash2Copy4}",
                            '500px',
                            '48px'
                        ],
                        [
                            "eid803",
                            "top",
                            2071,
                            18,
                            "easeOutExpo",
                            "${Flash2Copy2}",
                            '818px',
                            '700px'
                        ],
                        [
                            "eid814",
                            "top",
                            2089,
                            19,
                            "easeOutExpo",
                            "${Flash2Copy2}",
                            '700px',
                            '744px'
                        ],
                        [
                            "eid816",
                            "top",
                            2108,
                            169,
                            "easeOutExpo",
                            "${Flash2Copy2}",
                            '744px',
                            '825px'
                        ],
                        [
                            "eid748",
                            "opacity",
                            1261,
                            0,
                            "linear",
                            "${Flash2Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid749",
                            "opacity",
                            1408,
                            51,
                            "easeOutExpo",
                            "${Flash2Copy}",
                            '1',
                            '0.82051282051282'
                        ],
                        [
                            "eid750",
                            "opacity",
                            1460,
                            155,
                            "easeOutExpo",
                            "${Flash2Copy}",
                            '0.82051282051282',
                            '0'
                        ],
                        [
                            "eid718",
                            "filter.contrast",
                            1527,
                            46,
                            "easeOutExpo",
                            "${Flash1}",
                            '1.7',
                            '1.8001018460724'
                        ],
                        [
                            "eid780",
                            "rotateZ",
                            1394,
                            0,
                            "easeOutExpo",
                            "${Flash1Copy}",
                            '-6deg',
                            '-6deg'
                        ],
                        [
                            "eid782",
                            "opacity",
                            1087,
                            55,
                            "easeOutExpo",
                            "${Flash1Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid783",
                            "opacity",
                            1141,
                            198,
                            "easeOutExpo",
                            "${Flash1Copy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid838",
                            "left",
                            988,
                            206,
                            "easeOutSine",
                            "${Flash2Copy4}",
                            '2px',
                            '236px'
                        ],
                            [ "eid985", "trigger", 841, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${camera-shutter-click-05}', [] ] ]
                    ]
                }
            },
            "Flash_Timer": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 194, 177, 'auto', 'auto'],
                            id: 'FlashCopy',
                            opacity: '0.58119610563303',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Flash.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 194, 177]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid565",
                            "width",
                            0,
                            1000,
                            "linear",
                            "${FlashCopy}",
                            '194px',
                            '29px'
                        ],
                        [
                            "eid564",
                            "width",
                            1000,
                            1000,
                            "linear",
                            "${FlashCopy}",
                            '194px',
                            '29px'
                        ],
                        [
                            "eid559",
                            "height",
                            0,
                            1000,
                            "linear",
                            "${FlashCopy}",
                            '177px',
                            '29px'
                        ],
                        [
                            "eid558",
                            "height",
                            1000,
                            1000,
                            "linear",
                            "${FlashCopy}",
                            '177px',
                            '29px'
                        ],
                        [
                            "eid561",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${FlashCopy}",
                            '0.58119610563303',
                            '0'
                        ],
                        [
                            "eid560",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${FlashCopy}",
                            '0.58119610563303',
                            '0'
                        ],
                        [
                            "eid557",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${FlashCopy}",
                            '0px',
                            '74px'
                        ],
                        [
                            "eid556",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${FlashCopy}",
                            '0px',
                            '74px'
                        ],
                        [
                            "eid563",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${FlashCopy}",
                            '0px',
                            '76px'
                        ],
                        [
                            "eid562",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${FlashCopy}",
                            '0px',
                            '76px'
                        ]
                    ]
                }
            },
            "updateholder": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'updateframe',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [0, 0, '479px', 646, 'auto', 'auto'],
                            fill: ['rgba(215,215,215,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 479, 646]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "content": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 477, '347px', 'auto', 'auto'],
                            display: 'none',
                            id: 'photoholder',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(25,2,2,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 477, 347]
                        }
                    }
                },
                timeline: {
                    duration: 2070,
                    autoPlay: true,
                    data: [
                        [
                            "eid885",
                            "opacity",
                            283,
                            410,
                            "easeInOutBack",
                            "${photoholder}",
                            '0',
                            '1'
                        ],
                        [
                            "eid886",
                            "background-color",
                            692,
                            0,
                            "easeInOutBack",
                            "${photoholder}",
                            'rgba(25,2,2,1.00)',
                            'rgba(25,2,2,1.00)'
                        ],
                        [
                            "eid889",
                            "display",
                            283,
                            0,
                            "easeInOutBack",
                            "${photoholder}",
                            'none',
                            'block'
                        ],
                        [
                            "eid887",
                            "display",
                            2070,
                            0,
                            "easeInOutBack",
                            "${photoholder}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "callus": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: [0, 0, '480px', '800px', 'auto', 'auto'],
                            id: 'thumbstackbtn',
                            opacity: '0',
                            clip: 'rect(720px 377.5px 800px 105px)',
                            fill: ['rgba(0,0,0,0)', 'images/thumbstackbtn.png', '0px', '0px']
                        },
                        {
                            rect: [133, 745, 225, '26px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRect',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(36,29,152,1.00)']
                        },
                        {
                            rect: [183, 747, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, ''], 'rgba(195,0,0,1.00)', '600', 'none', 'normal', '', 'nowrap'],
                            align: 'center',
                            id: 'Text',
                            opacity: '0',
                            text: 'Call Us Today',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 480, 800]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid911",
                            "top",
                            0,
                            0,
                            "easeInOutBack",
                            "${RoundRect}",
                            '745px',
                            '674px'
                        ],
                        [
                            "eid913",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid461",
                            "top",
                            0,
                            0,
                            "easeInOutBack",
                            "${thumbstackbtn}",
                            '0px',
                            '-70px'
                        ],
                        [
                            "eid462",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${thumbstackbtn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid912",
                            "top",
                            0,
                            0,
                            "easeInOutBack",
                            "${Text}",
                            '747px',
                            '676px'
                        ],
                        [
                            "eid914",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${Text}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "viiewgal": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'gframe',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [0, 0, 506, 717, 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 506, 717]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-341792330");
