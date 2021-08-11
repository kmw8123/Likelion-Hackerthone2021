// 모든 대답들은 공통되게 클릭 이벤트로 리슨해서 저장할 수 있도록 일부러 형식을 answer1,2들로 통일시켜 놓았습니다.
// 함수들이 같은 형식인 게 많아서 보기 안 좋긴 하지만, innerText


// 개인별 성격 유형 테스트 대답은 슬라이드 1부터 12마다 answer1, answer2로 구분해서 받아주시면 됩니다.
// 개인별 성격 유형 결과값은 1부터 16의 숫자값으로 만드시면 됩니다.
// 1부터 16까지에 대응되는 각각의 성격은 코드 5줄의 함수 내용을 보시면 알 수 있습니다.



// 가족별 성격 조합 테스트 대답은 슬라이드 15부터 24까지 answer1, answer2와 nth child를 이용해서 각각 받아주셔야 합니다.
// 가족별 성격 조합 테스트 대답으로 받아야 할 값들은 아래와 같습니다.
// 1. 가족의 구성원이 몇 명인지 : 얘는 question.html의 slide-15의 대답값입니다.
// 2. 가족 구성원의 각 성격 유형이 무엇인지 : 얘는 question.html의 slide-16부터 slide-24까지의 대답값들입니다.
//    가족 구성원 명 수마다 서로 다른 슬라이드를 받고 있습니다. 이는 question.html의 268줄부터의 내용이고 각 슬라이드마다 주석을 달아두었으니
//    그걸 참고해서 코드 짜시면 될 듯 합니다.

// 가족별 성격 조합 결과값으로 만들어야 할 값들은 아래와 같습니다.
// 1. 가족별 성격 조합의 김밥 이름 : 얘는 familyTitle.innerText = 을 이용해서 넣어주시면 됩니다.
// 2. 가족의 구성원이 몇 명인지 : 얘는 question.html의 slide-15의 대답값입니다.
// 3. 가족별 성격 조합에 따른 추천 활동 : 얘는 familyWork1.innnerText = 부터 familyWork4.innerText = 까지 이용해서 받아주시면 됩니다.
//    가족 구성원 수에 따라서 만들어야 할 familyWork의 개수가 달라지겠죠?

// 1과 3의 결과값들을 이용해서 question.html의 slide-25에다가 알맞게 넣어주시면 됩니다.
// 저희가 구상한 것이 "김밥 이름", "추천 활동 n개"이므로, 위의 개인별 성격 유형 결과를 출력할 때 이용한 함수들을 쓰시면 편할 겁니다.
// 김밥 이름은 function personalityTitle()에 Personality 값들을 쭉 나열해서 familyTitle.innerText = 로 넣어주시면 됩니다.
// 추천 활동은 function personalityContent3()의 Content 값들을 각각 familyWork1.innerText = 부터 familyWork4.innerText = 까지 알맞게
// 넣어주시면 됩니다.
// 김밥 이름이랑 추천 활동 코드는 제가 맨 아래에다가 임의로 만들어 두었습니다. 안에 값들을 결과값으로 바꿔서 넣어주시면 됩니다.



function personalityTitle(result) {
    // 이걸로 개인별 성격 유형을 판별하면 됩니다.
    if (result === 1) {
        Personality = "오이"
        Title = "Estp인 당신은 도전적인 오이네요!"
        title.innerText = Title;
    }
    if (result === 2) {
        Personality = "햄"
        Title = "Esfp인 당신은 분위기메이커 햄이네요!"
        title.innerText = Title;
    }
    if (result === 3) {
        Personality = "양파"
        Title = "Enfp인 당신은 까도까도 새로운 양파네요!"
        title.innerText = Title;
    }
    if (result === 4) {
        Personality = "돈까스"
        Title = "Entp인 당신은 흔한건 싫어! 마이웨이 돈까스네요!"
        title.innerText = Title;
    }
    if (result === 5) {
        Personality = "시금치"
        Title = "Estj인 당신은 알아서 딱딱! 시금치네요!"
        title.innerText = Title;
    }
    if (result === 6) {
        Personality = "애호박"
        Title = "Esfj인 당신은 친절한 애호박씨네요!"
        title.innerText = Title;
    }
    if (result === 7) {
        Personality = "참치"
        Title = "Enfj인 당신은 신뢰의 참치네요!"
        title.innerText = Title;
    }
    if (result === 8) {
        Personality = "당근"
        Title = "Entj인 당신은 해피 당근이네요!"
        title.innerText = Title;
    }
    if (result === 9) {
        Personality = "김치"
        Title = "isfp인 당신은 무한변신 김치네요!"
        title.innerText = Title;
    }
    if (result === 10) {
        Personality = "깨소금"
        Title = "istj인 당신은 뒷심왕 깨소금이네요!"
        title.innerText = Title;
    }
    if (result === 11) {
        Personality = "치즈"
        Title = "istp인 당신은 말랑말랑 융통성갑 치즈네요!"
        title.innerText = Title;
    }
    if (result === 12) {
        Personality = "참기름"
        Title = "isfj인 당신은 우아한 참기름이네요!"
        title.innerText = Title;
    }
    if (result === 13) {
        Personality = "단무지"
        Title = "intp인 당신은 똑똑한 단무지네요!"
        title.innerText = Title;
    }
    if (result === 14) {
        Personality = "깻잎"
        Title = "intj인 당신은 부드러운 카리스마 깻잎이네요!"
        title.innerText = Title;
    }
    if (result === 15) {
        Personality = "어묵"
        Title = "infj인 당신은 친화력갑 어묵이네요!"
        title.innerText = Title;
    }
    if (result === 16) {
        Personality = "계란지단"
        Title = "infp인 당신은 순둥순둥 계란지단이네요!"
        title.innerText = Title;
    }
    return Personality;
}

function personalityContent1(result) {
    // 이걸로 개인별 성격 유형을 판별하면 됩니다.
    if (result === 1) {
        Content = "다양함을 선호하는 성격의 당신은 ‘도전적인 오이’입니다."
        content1.innerText = Content;
    }
    if (result === 2) {
        Content = "분위기를 고조시키는 우호적인 성격의 당신은 ‘분위기메이커 햄’입니다."
        content1.innerText = Content;
    }
    if (result === 3) {
        Content = "당신은 ‘까도까도 새로운 양파’ 타입입니다."
        content1.innerText = Content;
    }
    if (result === 4) {
        Content = "풍부한 상상력으로 새로운 것에 도전하는 성격의 당신은 ‘마이웨이 돈까스’네요!"
        content1.innerText = Content;
    }
    if (result === 5) {
        Content = "사무적, 실용적, 현실적인 스타일의 당신은 ‘알아서 딱딱! 시금치’ 타입이네요."
        content1.innerText = Content;
    }
    if (result === 6) {
        Content = "친절, 현실감을 바탕으로 타인에게 봉사하는 당신은 ‘친절한 애호박씨’입니다."
        content1.innerText = Content;
    }
    if (result === 7) {
        Content = "타인의 성장을 도모하고 협동적인 사람인 당신은 ‘신뢰의 참치’에요."
        content1.innerText = Content;
    }
    if (result === 8) {
        Content = "비전을 갖고 타인을 활력적으로 인도하는 당신은 ‘해피 당근’입니다!"
        content1.innerText = Content;
    }
    if (result === 9) {
        Content = "자유로운 영혼의 어디로 튈지 모르는 당신은 ‘무한변신 김치’입니다!\n각양각색의 모습으로 변하는 당신은 마치 겉절이, 묵은지, 신김치 등 다양한 변신을 즐기는 김치와 닮았군요."
        content1.innerText = Content;
    }
    if (result === 10) {
        Content = "한번 시작한 건 끝까지 해내는 성격의 당신은 ‘뒷심왕 깨소금’ 입니다!\n\n김밥 싸기의 마무리를 담당하는 깨소금처럼, 모든 일은 마무리를 보아야 직성이 풀리는 타입입니다."
        content1.innerText = Content;
    }
    if (result === 11) {
        Content = "논리적이고 뛰어난 상황 적응력을 지닌 당신은 ‘말랑말랑 융통성갑 치즈’입니다.\n\n빠른 두뇌회전과 임기응변이 강한 유형으로, 마치 말랑말랑 하다가도 딱딱하게 굳고 다시 말랑말랑 해지기도 하는 유연한 치즈같군요!"
        content1.innerText = Content;
    }
    if (result === 12) {
        Content = "당신은 성실하고 온화한 성격으로, 언제 어디서나 은은하게 빛나는 ‘우아한 참기름’입니다!\n\n부드러운 성격으로 주변 사람들을 빛나게 하는 당신은 마치 참기름과 같은 사람이에요."
        content1.innerText = Content;
    }
    if (result === 13) {
        Content = "비평적인 관점을 지닌 뛰어난 전략가 같은 당신은 김밥의 시그니처 재료 ‘똑똑한 단무지’입니다.\n\n적응력이 뛰어나고, 남다른 시선으로 우리 사회를 이끌어 가는 당신은 세상에 없어서는 안 될 존재로, 마치 김밥에게 꼭 필요한 단무지와 같은 사람이군요."
        content1.innerText = Content;
    }
    if (result === 14) {
        Content = "부드러운 카리스마로 비전을 제시하는 당신은 ‘부드러운 카리스마 깻잎’입니다.\n\n부드러운 카리스마로 비전을 제시하며 전체를 조화시키는 모습이, 마치 맛은 쌉사름하지만 김밥 속 재료를 모두 감싸 안는 깻잎과 닮았군요."
        content1.innerText = Content;
    }
    if (result === 15) {
        Content = "생각도 깊고 누구와도 잘 어울리는 같은 당신은 ‘친화력갑 어묵’입니다!\n\n마치 떡볶이에도, 무침에도, 핫바에도, 술 안주로도 어디에나 잘 어울리는 어묵의 모습과 닮았군요!"
        content1.innerText = Content;
    }
    if (result === 16) {
        Content = "부드럽고 순수한 이미지의 당신은 마치 부드러운 식감을 더해주는 ‘순둥순둥 계란지단’입니다."
        content1.innerText = Content;
    }
}

function personalityContent2(result) {
    // 이걸로 개인별 성격 유형을 판별하면 됩니다.
    if (result === 1) {
        Content = "김밥 매니아들은 사랑하고 오이를 싫어하는 이들에게는 호불호가 갈리기도 하지만 언제나 새로움에 도전하는 모습이군요.\n\n대담하고 실용적인 마인드로 새로운 아이디어와 솔루션을 실험하기를 좋아하는 타입이네요!\n\n다만 참을성이 없고 조급함으로 인해 위험을 발생시키기도 하는 당신이네요."
        content2.innerText = Content;
    }
    if (result === 2) {
        Content = "다른 재료들보다 가장 맛을 돋궈주고 누구에게나 사랑받는 햄과 비슷한 당신은 대담하고 독창적이며 말이 많아 특유의 위트로 사람들과 보내는 시간을 즐깁니다.\n\n다만 민감하고 쉽게 실증나는 성격으로 장기적인 계획을 세우기보다는 순간의 즐거움에 집착하는 경향이 조금 있네요."
        content2.innerText = Content;
    }
    if (result === 3) {
        Content = "열정적으로 새 관계를 만드는 사람이군요!\n\n재기발랄한 활동가인 당신은 감정 시복이 심하기도 하고 감정이 풍부하네요!\n\n새로운 사람을 만나기를 좋아하지만, 흥미 없는 새로운 만남은 꺼리는군요."
        content2.innerText = Content;
    }
    if (result === 4) {
        Content = "아는 것이 많고 매우 유연하여 노력하지 않아도 새로운 것으로 전환이 빠른 편이에요!\n\n흥미를 느끼는 것에는 열정과 에너지를 보여주지만, 금세 지루함을 느끼기도 해요."
        content2.innerText = Content;
    }
    if (result === 5) {
        Content = "효율적인 것을 좋아하며 계획과 목표를 실행하면서 활동하는 것을 좋아해요.\n\n어려운 상황에서도 포기하지 않는 강한 의지와 영감을 지닌 당신!\n\n가끔은 참을성이 없고 미숙한 감정을 다루기 어려워하네요."
        
    }
    if (result === 6) {
        Content = "타인을 돕고 싶은 욕구가 높으며 집단의 일을 개인보다 우선시하는 경향이 있어요.\n\n타인의 인정을 받고자하는 욕구가 있으며 준비성이 철저하네요!\n\n한편, 빠른 실행에 집착하는 한편 진득한 노력보다는 행동 요령에 특화되어 있어요.\n\n게다가 외향성과 계획성이 뛰어날 수록 잡생각이 많아요.그럴 때일 수록 하나의 일에 진득하게 몰두해보는 것도 좋겠죠."
        content2.innerText = Content;
    }
    if (result === 7) {
        Content = "당신을 가장 화나게 하는 건 사람을 실망시키는 것이죠.\n\n당신은 진정한 팀 플레이어로, 상대방의 의견을 경청하며 이타적입니다.\n\n그러나 지나치게 이상주의적이거나 이타적으로 굴어, 때로는 스스로를 잃을지도 몰라요."
        content2.innerText = Content;
    }
    if (result === 8) {
        Content = "자기애가 강하며, 활동적이고, 사교적입니다.\n\n전체적인 측면에서 시야가 넓으며 팀원들과 쉽게 어울리는 타입이네요!\n\n다만 감정적인 공감이 부족하거나, 주변에 귀를 잘 기울이지 않곤 해요."
        content2.innerText = Content;
    }
    if (result === 9) {
        Content = "개방성과 적응력이 강한 당신은 다양한 유형의 사람들과 잘 어울리는 성격의 소유자입니다.\n\n타인을 배려하는 따뜻한 마음씨와 겸손함 덕분에 크게 나서는 성격이 아님에도 인기가 많은 유형입니다.\n\n또한 이 유형은 자신을 잘 꾸밀 줄 알고, 예술감각이 뛰어난 사람들이 많습니다.\n\n하지만, 새로움에 대한 욕구가 커서, 반복되는 루틴을 못 버텨 하고, 이는 자칫 어떤 일이든 쉽게 포기하는 경향으로도 이어질 수 있으니 주의하면 좋을 듯 해요!"
        content2.innerText = Content;
    }
    if (result === 10) {
        Content = "철저한 분석과 계획, 뛰어난 현실감각으로 한번 목표로 정했으면 끝까지 이끌고 가는 뒷심이 센 사람이군요!\n\n그러다 보니, 당신을 믿고 따르는 사람들이 항상 주변에 많고 사람들에게 강한 신뢰감을 심어주는 이미지입니다.\n\n또한 쉽게 감정에 휘둘리지 않고, 위기의 상황에서도 침착하게 행동할 줄 아는 유형으로, 주변 사람들에게도 든든한 버팀목 같은 존재입니다.\n\n하지만, 가끔은 너무 이성적인 나머지 감성적인 상대와 만났을 때 의도치 않은 상처를 주기도 하는데요.\n\n때로는 이성과 감성을 함께 아우를 줄 아는 것도 필요한 것 같아요!"
        content2.innerText = Content;
    }
    if (result === 11) {
        Content = "실용적이고, 현실적인 것에 관심이 많고 좋아하는 분야나 사람에 있어서는 무한 애정을 쏟는 사람입니다.\n\n그러다보니, 뜬구름 잡는 소리나 비현실적인 주제를 두고 계속 이야기하는 것을 싫어하기도 해요.\n\n가끔 사람과의 관계에서 감성적인 센스가 부족하기도 하지만, 특유의 유머러스한 입담과 융통성 때문에 미워할 수가 없는 유형이랍니다!"
        content2.innerText = Content;
    }
    if (result === 12) {
        Content = "수용력과 배려심이 강한 당신은 밝고 긍정적이며, 누구도 따라할 수 없는 순수한 느낌이 바로 매력 포인트입니다.\n\n또한, 계획적이고 성실한 성격때문에 주변 사람들이 자연스레 당신을 믿고 따르게 되는 일이 많아요.\n\n어른스러운 느낌의 사람이다 보니, 때로는 이런 자신의 모습 때문에 속앓이를 하거나 스트레스를 안으로 삭히는 경우가 있어요. \n\n가끔은 주변의 사람들에게 의지하는 것도 괜찮지 않을까요? 당신의 투정 정도는 귀여운 애교처럼 느껴질거에요!"
        content2.innerText = Content;
    }
    if (result === 13) {
        Content = "호기심이 많고, 지식을 쌓는 것에 즐거움을 느낄 줄 아는 유형으로, 똑똑한 브레인 느낌의 사람이에요.\n\n하지만, 항상 바쁜 머리와는 다르게 은근 게으른 당신!\n\n이제는 머릿속의 통통 튀는 아이디어들을 몸소 실천해보는 것은 어떨까요?"
        content2.innerText = Content;
    }
    if (result === 14) {
        Content = "감정보단 이성, 즉흥보단 계획이 우선인 당신은 주변 사람들에게 현명한 해답을 알려주는 경우가 많아요.\n\n첫인상은 과묵해 보일 수도 있지만, 자신이 관심있거나 좋아하는 분야에서는 수다쟁이가 되는 유형으로 반전매력의 소유자입니다.\n\n하지만 주변에 약간 무관심한 편이기도 해서, 종종 이런 모습에 서운해하는 사람들이 있기도 한답니다.\n\n때로는 관심있는 분야 이외에도 더 넓게 살펴보는 보는 건 어떨까요? 새로운 재미가 찾아올지도 몰라요!"
        content2.innerText = Content;
    }
    if (result === 15) {
        Content = "누구보다 정직하고, 사려깊은 당신은 아마 어딜가도 ‘좋은 사람’이라는 이미지의 소유자일 거에요.\n\n주변에 대한 관심도 많고, 그만큼 생각도 많아서 남다른 통찰력을 지닌 유형이랍니다.\n\n하지만 가끔은 생각이 너무 많아서 스스로에게 지치기도 합니다.\n\n때로는 아무 생각하지 않고, 스스로에게 쉼을 주는 건 어떨까요?"
        content2.innerText = Content;
    }
    if (result === 16) {
        Content = "풍부한 감수성과 여린 마음을 지닌 당신은 배려심이 깊고, 어딜가도 ‘착하다’는 소리를 듣는 사람입니다.\n\n하지만 여린 겉모습과 달리, 내면에는 자신만의 굳은 신념과 불타오르는 열정을 지니고 있으면서 보다 좋은 세상을 만들어가고자 노력하는 사람이에요.\n\n본투비 선한 심성을 가진 타입으로, 못되고 싶어도 못될 수 없는 사람이에요.\n\n그래서 주위 사람들을 너무 배려하다 보니, 때로는 너무 눈치를 보거나 속앓이를 하는 경우도 많군요.\n\n타인을 배려해 나의 속마음을 숨기는 모습이, 때로는 가족이나 연인 등 가까운 사람들의 입장에서는 서운할 수 있어요."
        content2.innerText = Content;
    }
}

function personalityContent3(result) {
    // 이걸로 개인별 성격 유형을 판별하면 됩니다.
    if (result === 1) {
        Content = "오늘은 새로운 곳으로 “캠핑”을 떠나보는건 어떨까요?"
        content3.innerText = Content;
    }
    if (result === 2) {
        Content = "오늘은 끈기 있는 도전을 위해 가족 다 같이 으쌰으쌰 “러닝”을 통해 분위기를 업 시켜보는건 어떨까요?"
        content3.innerText = Content;
    }
    if (result === 3) {
        Content = "오늘은 친숙하면서도 낯선 이들을 만날 수 있는 활동인 “애견 카페”나 “키즈 카페”에서 새로운 가족들을 만나 놀아보는건 어떨까요?"
        content3.innerText = Content;
    }
    if (result === 4) {
        Content = "오늘은 새로운 자극이 될 수 있는 놀이인 바다로 떠나 “서핑”에 도전해보는건 어떨까요?"
        content3.innerText = Content;
    }
    if (result === 5) {
        Content = "오늘은 집에 둘 수 있는 연필꽂이, 그릇 등을 만들 수 있는 “도자기 공예 체험”을 해보는건 어떨까요?"
        content3.innerText = Content;
    }
    if (result === 6) {
        Content = "오늘은 가족 다함께 “뜨개질”은 어떨까요?\n\n세이브더칠드런 신생아와 산모의 건강을 지키는 신생아 살리기 캠페인에도 참여할 수 있어요!"
        content3.innerText = Content;
    }
    if (result === 7) {
        Content = "오늘은 서로서로 자세를 봐주며 더 높은 곳에 도전하는 “클라이밍”에 도전해보는 것은 어떨까요?"
        content3.innerText = Content;
    }
    if (result === 8) {
        Content = "오늘은 곁에 있는 가족들과 함께 새로운 포토존을 찾아 “벽화마을”의 구석구석을 살펴보며 걸어보면 어떨까요?"
        content3.innerText = Content;
    }
    if (result === 9) {
        Content = "오늘은 가족과 함께 예술감각을 마음껏 표현해낼 수 있는 “꽃꽂이 클래스” 활동을 해보는건 어떨까요?"
        content3.innerText = Content;
    }
    if (result === 10) {
        Content = "오늘은 가족과 함께 뒷심이 필요한 “낚시”하러 가는 건 어떨까요?"
        content3.innerText = Content;
    }
    if (result === 11) {
        Content = "오늘은 빠른 적응력과 두뇌회전으로 가족과 함께 협력할 수 있는 “방탈출 게임”하러 가는 건 어떨까요?"
        content3.innerText = Content;
    }
    if (result === 12) {
        Content = "오늘은 당신의 부드러움을 충전해줄 “산책”을 가족과 함께 즐기는 건 어떨까요?"
        content3.innerText = Content;
    }
    if (result === 13) {
        Content = "오늘은 다양한 전략을 세우고 즐기는 “보드게임 활동”을 추천합니다!"
        content3.innerText = Content;
    }
    if (result === 14) {
        Content = "오늘은 가족들 개개인의 성격을 잘 조화시킬 줄 아는 깻잎 유형과 함께, 당장 “가족여행”을 즐기러 가보세요!"
        content3.innerText = Content;
    }
    if (result === 15) {
        Content = "오늘은 남다른 눈썰미와 통찰력을 지닌 어묵 유형과 함께 온가족이 “숨은 그림 찾기”를 하며 즐거운 대결을 펼쳐보는 걸 추천합니다!"
        content3.innerText = Content;
    }
    if (result === 16) {
        Content = "오늘은 가족끼리 따뜻한 마음을 나눌 수 있는 “마니또”활동을 해보는건 어떨까요?"
        content3.innerText = Content;
    }
    return Content;
}


// 개인별 성격 유형 결과값을 출력하는 함수들
personalityTitle(16);
personalityContent1(16);
personalityContent2(16);
personalityContent3(16);

// 가족 성격 조합 결과값을 출력하는 함수들
familyTitle.innerText = `당신 가족의 성격 조합은 ${personalityTitle(1)},${personalityTitle(2)},${personalityTitle(3)},${personalityTitle(4)} 김밥이군요!`;
familyWork1.innerText = `1. ${personalityContent3(1)}`;
familyWork2.innerText = `2. ${personalityContent3(2)}`;
familyWork3.innerText = `3. ${personalityContent3(3)}`;
familyWork4.innerText = `4. ${personalityContent3(4)}`;
