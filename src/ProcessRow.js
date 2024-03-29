'use strict'
const Utils = require("../lib/utils");
const utils = new Utils();
const _ = require('lodash');
const fs = require("fs");
module.exports =
    class ProcessRow {

        constructor(Lesson, ProcessPath) {
            this.Lesson = Lesson;
            this.ProcessPath = ProcessPath
        }
        async process(listH5Ps, h5pName, row, i) {
            try {
                let mod = (i - 3) % 5;
                switch (mod) {
                    case 0:
                        listH5Ps = this.update_h5p(listH5Ps, h5pName, row, i)
                        break;
                    case 1:
                        listH5Ps = this.update_content(listH5Ps, h5pName, row, i)
                        break;
                    default:
                        break;
                }
            } catch (error) {
                console.log(error)
            }

            return listH5Ps;
        }
        async update_content(listH5Ps, h5pName, row, i) {
            let lesson_path = row[0]
            let content_path = row[i];
            let input_value = row[i + 1];
            let asset = row[i + 2];
            let format = row[i + 3]
            let content_value = input_value
            if (!content_value && lesson_path) {
                content_value = eval('this.' + lesson_path)
            }
            if (asset || content_path.split('.').pop() === "path") {
                let asset_output_path = _.get(listH5Ps[h5pName].content, content_path)
                let asset_input_path = content_value
                if (asset_input_path) {
                    asset_output_path = await this.copy_file_to_output(asset_input_path, h5pName, asset_output_path)
                }
                content_value = asset_output_path
                if (format) {
                    let this_lesson_path = ''
                    if (lesson_path) {
                        this_lesson_path = "this." + lesson_path
                    }
                    let params = this.params_from_format(format)
                    content_value = await eval("this." + format.split(' ')[0] + "(" + this_lesson_path + params + " )")                }

            } else {
                if (format && lesson_path) {
                    let params = this.params_from_format(format)
                    try {
                        let this_lesson_path = ''
                        if (lesson_path) {
                            this_lesson_path = "this." + lesson_path
                        }
                        
                        content_value = await eval("this." + format.split(' ')[0] + "(" + this_lesson_path + params + " )")

                    } catch (error) {
                        console.log(`Format :(${format})`)
                        throw error
                    }
                }
            }
            if (content_value) {
                _.set(listH5Ps[h5pName].content, content_path, content_value)
                //console.log(_.get(listH5Ps[h5pName].content,content_path))
            }
            return listH5Ps
        }
        params_from_format(format) {
            let params = ''
            if (format.split(' ')[1]) {
                params = ',' + format.split(' ')[1]
                if (format.split(' ')[2]) {
                    params = params + ',' + format.split(' ')[2]
                    if (format.split(' ')[3]) {
                        params = params + ',' + format.split(' ')[3]
                    }
                }
            }
            return params
        }
        async update_h5p(listH5Ps, h5pName, row, i) {
            let key = row[i]
            if (row[0]) {
                let value = row[0]
                listH5Ps[h5pName].h5p[key] = eval('this.' + value)
            }else{
                let value = row[i + 2];
                listH5Ps[h5pName].h5p[key] = eval(value)
            }
            return listH5Ps
        }
        async copy_file_to_output(asset_input_path, h5pName, asset_output_path) {
            let ext = asset_input_path.split('.').pop().toLowerCase()
            let fileName = Date.now() + asset_input_path.split('/').pop()
            if (ext == 'mp3') {
                asset_output_path = 'audios/' + fileName
            }
            if (ext == 'mp4') {
                asset_output_path = 'videos/' + fileName
            }
            if (ext == 'jpg' || ext == 'png' || ext == 'jpeg') {
                asset_output_path = 'images/' + fileName
            }
            if (ext == 'vtt') {
                asset_output_path = 'files/' + fileName
            }
            let output_path = this.ProcessPath + h5pName + '/content/' + asset_output_path
            let input_path = './DATABASE/' + asset_input_path

            if (fs.existsSync(input_path)) {
                await utils.exec('cp ' + input_path + ' ' + output_path, true);
            } else {
                console.log(' File no exist' + input_path)
            }
            return asset_output_path;
        }
        async questionToEm(Resources, index) {
            let html = ''
            if (Resources.instructions.en) {
                html = html + `<p><em>${Resources.instructions.en}</em></p>`
            }
            if (Resources.body) {
                html = html + `<p>${Resources.body}</p>`
            }
            if (Resources.questions[index].question) {
                html = html + `<p><strong>${Resources.questions[index].question}</strong></p>`
            }
            return html 
        }
        async questionToEmInstrucionsBody(Resources) {
            return `<p><strong><em>${Resources.instructions.en}</em></strong></p>
            <p>${Resources.body}</p>` 
        }
        async questionToEmBody(Resource, index) {
            return `<p><em>${Resource.body}</em></p>
            <p><strong>${Resource.questions[index].question}</strong></p>`
        }
        async random(options, listH5Ps, question_index) {
            return _.random(min, max)
        }
        addSeconds(inputMiliSeconds, seconds){
            return Math.round(Number(inputMiliSeconds)/1000) + seconds
        }
        async presentation_li(can_do_statement) {
            return `<ul>
            <li><span style="font-size:1.5em;">Can1#${can_do_statement}</span></li>
           </ul></span>`
        }
        async questions(resource) {
            let questions= resource.questions
            let html = ``
            if (questions[0].question) {
                html = html + `<p><strong>${questions[0].question}</strong></p>`
            }
            if (typeof questions[0].options[1].text !== 'undefined') {
                html =html +`<p>*${questions[0].options[0].text}/${questions[0].options[1].text}*</p>`
            } else {
                html =html +`<p>*${questions[0].options[0].text}*</p>`
            }
            if (questions[1].question) {
                html =html +`<p>&nbsp;</p><p><strong>${questions[1].question}</strong></p>`
                if (typeof questions[1].options[1].text !== 'undefined' ) {
                    html =html +`<p>*${questions[1].options[0].text}/${questions[1].options[1].text}*</p>`
                }else{
                    html =html +`<p>*${questions[1].options[0].text}*</p>`
                }
            }
            return html
        }
        async drag(options, listH5Ps, h5pName, question_index) {
            let content = listH5Ps[h5pName].content
            let task = _.get(content, 'questions.' + question_index + '.params.question.task')
            let text_array = _.shuffle([0, 1, 2])
            let picture_array = _.shuffle([3, 4, 5])
            task.dropZones[0].correctElements[0] = text_array[0]
            task.dropZones[0].correctElements[1] = picture_array[0]
            for (let index = 0; index < 3; index++) {
                task.elements[text_array[index]].type.params.text = options[index].text
                let asset_input_path = options[index].poster
                let asset_output_path = "images/" + asset_input_path.split("/").pop()
                asset_output_path = await this.copy_file_to_output(asset_input_path, h5pName, asset_output_path)
                task.elements[picture_array[index]].type.params.file.path = asset_output_path
            }
            return task;
        }
        async questionToP(text) {
            return `<p style="text-align: center;"><span style="font-size:1.375em;">${text}</span></p>`
        }
        async can_do_statements(text, fontSize) {
            if (!fontSize) {
                fontSize = 1.5
            }
            return `<ul>
                <li><span style="font-size:${fontSize};">${text}</span></li>
                </ul>`
        }
        async Grammar_to_em(grammar) {
            return `<p>
            <em>
                <span style="font-size:1.5em;">
                    <span style="color:#4d4d4d;">
                        Definition: ${grammar.explanation}
                    </span>
                </span>
            </em>
        </p>
        <p><strong><span style="font-size:1.5em;">${grammar.example} </span></strong></p>
        `
        }
        async bullectPoint(point) {
            return `<p>
            <em>
                <span style="font-size:1.5em;">
                    <strong>
                        ${point}
                    </strong>
                </span>
            </em>
        </p>
        `
        }
        lessonSlide(Lesson){
            let html =`<h2 style=\"text-align: center;\">&nbsp;</h2>\n\n
            <h2 style=\"text-align: center;\">
                <span style=\"font-size:3em;\">
                    <span style=\"color:#ffffff;\">
                        <strong>Lesson ${Lesson.Lesson}:</strong>
                    </span>
                </span>
            </h2>\n\n
            <h2 style=\"text-align: center;\">
                <span style=\"font-size:2em;\"><span style=\"color:#ffffff;\">
                    <strong>${Lesson.name}</strong>
                </span></span>
            </h2>\n\n
            <h2 style=\"text-align: center;\">&nbsp;</h2>\n
            `
            return html
        }
        // lesson slide 
        // <h2 style=\"text-align: center;\">&nbsp;</h2>\n\n<h2 style=\"text-align: center;\"><span style=\"font-size:3em;\"><span style=\"color:#ffffff;\"><strong>Lesson 10#:</strong></span></span></h2>\n\n<h2 style=\"text-align: center;\"><span style=\"font-size:3em;\"><span style=\"color:#ffffff;\"><strong>Lesson Name</strong></span></span></h2>\n\n<h2 style=\"text-align: center;\">&nbsp;</h2>\n
        // object►presentation►slides►1►elements►4►action►params►text

        MMSStoSeconds(MMSS){
            let seconds = 0
            let split = MMSS.split(':')
            if (split.length!=2) {
                throw new Error('error en el tiempo')
            }else{
                 seconds = Number(split[0])*60 + Number(split[1])
            }
            return seconds
            
        }
        lowerCase(word){
            return word.toLowerCase();
        }
        async questionTofill(Questions) {
            
            let html = `<p><strong>${Questions[0].question}</strong></p>`
            if (typeof Questions[0].options[1].text !== 'undefined') {
                html = html + `<p>*${Questions[0].options[0].text}/${Questions[0].options[1].text}*</p>`
            } else {
                html = html + `<p>*${Questions[0].options[0].text}*</p>`
            }
            if (Questions[1].question) {
                html = html + `<p><strong>${Questions[1].question}:</strong></p>`
                if (typeof Questions[1].options[1].text !== 'undefined') {
                    html = html + `<p>*${Questions[1].options[0].text}/${Questions[1].options[1].text}*</p>`
                } else {
                    html = html + `<p>*${Questions[1].options[0].text}*</p>`
                }
            }
            return html

        }
        randomFailVideo() {
            let videoNames = [
                'almostgotme',
                'anothershot',
                'barttry',
                'briane',
                'candobetter',
                'candocamila',
                'guardiola',
                'homer',
                'jonknows',
                'lisacan',
                'lisiada',
                'notwhatimeant',
                'nowayowl',
                'shockedcat',
                'soclosegirl',
                'socloseteam',
                'terry',
                'thoranother',
                'tonyugh',
                'tryagaingolf',
                'tryfailbetter',
                'minute',
                'youcandobetter'
            ]
            let random = videoNames[Math.floor(Math.random()*videoNames.length)]
            let domain = 'https://coreproductido.s3.us-east-2.amazonaws.com/GIFs_Feedback/Fail/'
            return domain + random + '.mp4'

        }
        randomSuccessVideo() {
            let videoNames =[
                'AmericasGOT',
                'Obama',
                'Snapeapproves',
                'Welldone',
                'geofrry',
                'giphy',
                'goodjob',
                'greatjob',
                'jamie',
                'merryl',
                'oscars',
                'pickard',
                'thoryes',
                'weirdguy',
                'willsmith',
                'yay',
                'yougotit']
            let random = videoNames[Math.floor(Math.random()*videoNames.length)]
            let domain = 'https://coreproductido.s3.us-east-2.amazonaws.com/GIFs_Feedback/Pass/'
            return domain + random + '.mp4'
        }

    }