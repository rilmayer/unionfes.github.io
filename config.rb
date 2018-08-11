require "lib/display_length"
require "lib/helpers"

helpers DisplayLength
helpers Helpers

module StringExt
  def ljust(size, padstr = ' ')
    if length == bytesize
      super
    else
      size = size - length
      super(size, padstr)
    end
  end

  def rjust(size, padstr = ' ')
    if length == bytesize
      super
    else
      size = size - length
      super(size, padstr)
    end
  end
end

String.send(:prepend, StringExt)

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
end

activate :livereload
activate :sprockets

set :layout, false
set :relative_links, true
