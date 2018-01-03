import $ from './skizz'
import './plugins/anchor'
import './plugins/sidebar-nav'

let nav = $('.page-headernav').a11ynav({ api: true })

// Set i18n for subnav anchor
let labels = {
  root: {
    open: 'Afficher le sous menu de ',
    close: 'Masquer le sous menu de '
  },
  en: {
    open: 'Show sub navigation of ',
    close: 'Hide sub navigation of '
  }
}
labels = $.i18n(labels)

$('.anchor').anchor({
  onClick: function (trigger) {
    let svg = $('svg use', trigger)
    if (trigger.hasClass('is-active')) {
      svg.attr('xlink:href', '#icon-navigation-close')
      nav.open()
    } else {
      svg.attr('xlink:href', '#icon-navigation-anchor')
      nav.close()
    }
  }
})

$('.subnav-anchor').anchor({
  onClick: function (trigger) {
    let svg = $('svg use', trigger)
    let name = trigger.prev().text().trim()

    if (trigger.hasClass('is-active')) {
      trigger.attr('title', labels.close + name)
      svg.attr('xlink:href', '#icon-subnav-close')
    } else {
      trigger.attr('title', labels.open + name)
      svg.attr('xlink:href', '#icon-subnav-anchor')
    }
  }
})

// Add class to every pre block to add line number
$('pre').each(item => {
  item.className += 'line-numbers'
})
