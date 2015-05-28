$.fn.showSummary = function() {
  return new $.Summary(this);
};

$.Summary = function(el) {
  this.$el = $(el);
  this.bindEvent();
};

$.Summary.prototype.bindEvent = function() {
  var fn = this;

  this.$el.on("mouseenter", ".stories-link", function(event) {
    var $link = $(event.currentTarget);
    var href = $link.children()[0];
    $(href).addClass("hovered");
    fn.$hoveredSummaryDiv = $($link.children()[1]);
    fn.$hoveredSummaryDiv.removeClass("hidden");
  });

  this.$el.on("mouseleave", ".stories-link", function(event) {
    if ($(".modal").length === 0) {
      fn.$hoveredSummaryDiv.addClass("hidden");
      $("a.title-link").removeClass("hovered");
    }
  });

  this.$el.on("click", ".stories-link", function(event) {
    var $target = $(event.currentTarget);
    var name = $target.data("name");
    $("body").append("<div class='modal'></div>");
    if (name === "anotherdoor") {
      $("body").prepend("<div class='content'><h3 class='story-title'>When One Door Closes, Another Opens</h3><img src='../pics/grand_canyon.png' /><div class='story-paragraph'>I like motivational quotations. One of my favorite " +
      "so far, that I've encountered on the internet, is:<br><div class='span'><span class='quote'>Sometimes the door closes on a relationship, not because we failed but because something bigger " +
      "than us says this no longer fits our life. So, lock the door, shed a tear, turn around and look for the new door that is opened. It is a sign that you are no longer that person you were, "+
      "it is time to change into who you are. It is going to be okay. </span></div>" +
      "<br>Granted, the door which closed on me recently wasn't that of a romantic relationship, it was the relationship I had with myself (who I think I am; who I think I will be).<br>" +
      "For the longest time I thought I was going to medical school, become a doctor, and dedicate my life to medical sciences. I felt as if I " +
      "was meant for that pathway, and not getting into medical school meant I was a failure. Even when I dreaded going to lab, hated being a patient escort and doing " +
      "other 'pre-med' activities, I kept saying to myself that I am doing this for medical school, for a future in medicine.<br><br>" +
      "When I didn't get into medical school, part of me felt like a failure and that part <span><strong>hurts</strong></span>, a lot. Nevertheless, part of me felt liberated. " +
      "Now, I'm no longer restrained to that one path, and so many opportunities are now opening for me.</div></div>");
    }

    else if (name === "lessonlearned") {
      $("body").prepend("<div class='content'>" +
        "<h3 class='story-title'>What I Have Learned From A Job That Wasn't Meant To Be</h3><img src='../pics/grand_canyon.png' />" +
        "<p class='story-paragraph'>My high school guidance counselor once said to a group of my classmates and " +
        "I something along the lines of: <br><div class='span'><span class='quote'>I think everyone should experience a bad breakup, " +
        "a bad job, and a bad car. You will learn a lot about life from these three things and they will" +
        "shape you into stronger individuals.</span></div><br>My bad job convinced me to pursue what makes me happy, " +
        "even if it means leaving the past behind and start anew. So a little background: my past is pre-med/biological " +
        "research, and my present/future is web development/software engineering.<br><br>If I'm completely honest, " +
        "I never really liked bench work. I like academia, I like learning, and I like being creative. However, " +
        "I never liked the day-to-day work of research, and I was never really passionate about anything I was doing. " +
        "I stuck with it for that long because it was the only thing I thought I could do; it was the path I thought I had to lead. " +
        "<br><br>The breaking point happened when I was working as a research technician following my MIT graduation. I hated that job. " +
        "But that bad job is what finally gave me the confidence to admit to myself that this is not what I'm meant to do. This" +
        "bad job gave me the confidence to leave my past behind and pursue other options, options that I actually am excited about." +
        "<br><br>It took a lot of courage and confidence to leave. I left knowing that I had to face a world of unknown, with only " +
        "knowing that research and academia was not what I wanted to do anymore. " +
        "I learned to be strong, to do what was best for me even if I ended up leaving a bad image behind. " +
        "I learned that I have to take care of myself and look out for my best interest because no one else will." +
        "<br><br>I guess in the end, this job gave me the confidence to choose a path that I would enjoy walking on, " +
        "even if it's an unexpected path with an unknown ending.</p></div>");
    }

    else if (name === "heartSF") {
      $("body").prepend("<div class='content'><h3 class='story-title'>That Time I Chose To Follow My Heart To San Francisco</h3><img src='../pics/sf.png' />" +
      "<p class='story-paragraph'>A couple of months before graduatiation, I looked for research assistant jobs in Boston and San Francisco. " +
      "Boston because that's where MIT is and that's where I have lived for the past 8 years. SF because that's where Jamie is going.<br><br>" +
      "I had a great offer in Boston, in a stem cell research lab run by an extremely nice and thoughtful professor. I would be working on my own thing, "+
      "not being any specific postdoc's pair of hands. The offer in SF was not ideal. Though the PI is well known, working with two postdocs was not an ideal, or even good, situation. "+
      "Having parents who are both in academia, I knew this going in. If I had listened to my head, it would have been an easy and obvious choice. In the end, I chose SF because my heart told me to.<br><br>"+
      "If I had stayed in Boston, I wouldn't have attended App Academy. I wouldn't have made this site. " +
      "I wouldn't have had all the wonderful times and adventures with the friends I met here. I wouldn't be with Jamie. "+
      "I'm not saying it would have been bad for me to walk down the Academia/Medicine pathway. There would have been a greater chance I'd be in medical school "+
      "and mostly likely I would have liked my job a lot better. Perhaps I am missing out on a potentially amazing life, " +
      "but I know for sure that I would have missed out on so many wonderful experiences had this road been the road not taken.<br><br>" +
      "So my philosophy, be a romantic once in awhile, the heart knows where it belongs.</p></div>");
    }

    $(".content").animate({
      top: "50%",
    }, 1000);

    this.handleModal();

  }.bind(this));

};

$.Summary.prototype.handleModal = function() {
  $(".modal").on("click", function(event) {
    $(".modal").remove();
    $(".content").remove();
  });
};
